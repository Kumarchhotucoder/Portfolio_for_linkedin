const express = require('express');
const axios = require('axios');
const router = express.Router();
const Project = require('../models/Project');
const Experience = require('../models/Experience');

// Default curated portfolio projects
const defaultProjects = [
  {
    title: "Smart Library — Personal Library & QR Attendance System",
    description: "A production-grade library management system engineered for physical study spaces with 50-seat real-time visual occupancy tracking. Features dynamic HMAC-SHA256 encrypted QR attendance with 45-second anti-fraud rotation, mobile camera scanner, admin monitoring dashboard, automatic seat sync, and automated .xlsx Excel report generation.",
    techStack: ["React 19", "TypeScript", "Node.js", "Express", "MongoDB", "Tailwind CSS", "HMAC-SHA256 QR", "ExcelJS"],
    liveLink: "https://smart-library-orpin-seven.vercel.app",
    githubLink: "https://github.com/kunalkumar-9955/SmartLibrary",
    demoLink: "https://smart-library-orpin-seven.vercel.app",
    repoSlug: "kunalkumar-9955/SmartLibrary",
    featured: true
  },
  {
    title: "BireeAntallyX — Accounting Software",
    description: "A lightning-fast, full-stack accounting SaaS with a shortcut-key-driven UI, eliminating the need for a mouse and reducing data entry time by 60%. Features role-based access for CAs and business owners, handling Invoicing, Ledger, GST Filing, P&L, and Balance Sheets in real-time.",
    techStack: ["MERN Stack", "React", "Node.js", "MongoDB", "Express", "JWT"],
    liveLink: "https://bi-reena-tally-x-sg2i.vercel.app/",
    githubLink: "https://github.com/Kumarchhotucoder/bi_reena_tallyX",
    demoLink: "https://bi-reena-tally-x-sg2i.vercel.app/",
    repoSlug: "Kumarchhotucoder/bi_reena_tallyX",
    featured: true
  },
  {
    title: "AI Study Buddy",
    description: "An AI-powered academic assistant powered by the Google Gemini API. It answers queries, generates summaries, and provides personalized learning support with a real-time chat interface. Includes secure login and personalized chat history.",
    techStack: ["React", "Google Gemini API", "Firebase Auth", "Firestore"],
    liveLink: "https://friendly-heliotrope-2732e7.netlify.app/",
    githubLink: "https://github.com/Kumarchhotucoder/Ai-Study-Buddy",
    demoLink: "https://friendly-heliotrope-2732e7.netlify.app/",
    repoSlug: "Kumarchhotucoder/Ai-Study-Buddy",
    featured: false
  }
];

// In-memory cache for GitHub repo sync
const githubRepoCache = {};
const CACHE_TTL = 15 * 60 * 1000; // 15 minutes

// Get all projects (DB first, fallback to default projects)
router.get('/projects', async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    if (projects && projects.length > 0) {
      return res.json(projects);
    }
    return res.json(defaultProjects);
  } catch (error) {
    // Return curated projects on DB offline
    res.json(defaultProjects);
  }
});

// Auto-sync project info directly from GitHub
router.get('/sync-github/:owner/:repo', async (req, res) => {
  const { owner, repo } = req.params;
  const key = `${owner}/${repo}`;

  if (githubRepoCache[key] && (Date.now() - githubRepoCache[key].timestamp < CACHE_TTL)) {
    return res.json({ success: true, fromCache: true, data: githubRepoCache[key].data });
  }

  try {
    const response = await axios.get(`https://api.github.com/repos/${owner}/${repo}`, {
      headers: {
        'User-Agent': 'Portfolio-App'
      }
    });

    const repoData = {
      name: response.data.name,
      fullName: response.data.full_name,
      description: response.data.description,
      stars: response.data.stargazers_count,
      forks: response.data.forks_count,
      language: response.data.language,
      pushedAt: response.data.pushed_at,
      htmlUrl: response.data.html_url,
      homepage: response.data.homepage
    };

    githubRepoCache[key] = {
      data: repoData,
      timestamp: Date.now()
    };

    res.json({ success: true, fromCache: false, data: repoData });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to sync with GitHub',
      error: error.message
    });
  }
});

// Quick sync alias for Smart Library
router.get('/sync-github/smart-library', async (req, res) => {
  req.params.owner = 'kunalkumar-9955';
  req.params.repo = 'SmartLibrary';
  return router.handle(req, res);
});

// Get all experiences
router.get('/experience', async (req, res) => {
  try {
    const experiences = await Experience.find().sort({ createdAt: -1 });
    res.json(experiences);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching experience' });
  }
});

module.exports = router;
