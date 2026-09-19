import React, { useState, useEffect } from 'react';
import { ExternalLink, Star, GitFork, Clock, CheckCircle2, RefreshCw } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

const initialProjects = [
  {
    id: "smart-library",
    title: "Smart Library — Personal Library & QR Attendance System",
    description: "A production-grade library management system engineered for physical study spaces with 50-seat real-time visual occupancy tracking. Features dynamic HMAC-SHA256 encrypted QR attendance with 45-second anti-fraud rotation, mobile camera scanner, admin monitoring dashboard, automatic seat sync, and automated .xlsx Excel report generation.",
    techStack: ["React 19", "TypeScript", "Node.js", "Express", "MongoDB", "Tailwind CSS", "HMAC-SHA256 QR", "ExcelJS"],
    liveUrl: "https://smart-library-orpin-seven.vercel.app",
    githubUrl: "https://github.com/kunalkumar-9955/SmartLibrary",
    repoSlug: "kunalkumar-9955/SmartLibrary",
    featured: true,
    badgeText: "🚀 Newly Launched & Live",
    badgeColor: "rgba(0, 210, 255, 0.15)",
    badgeTextColor: "#00d2ff",
    highlights: [
      "Dynamic HMAC-SHA256 QR attendance engine with 45s anti-fraud rotation",
      "50-seat visual layout grid with atomic seat allocation & release",
      "Automated genuine .xlsx attendance report export with exceljs"
    ],
    githubStats: {
      stars: 0,
      forks: 0,
      pushedAt: '2026-09-15T17:18:41Z',
      language: 'TypeScript'
    }
  },
  {
    id: "bireenatallyx",
    title: "BireeAntallyX — Accounting Software",
    description: "A lightning-fast, full-stack accounting SaaS with a shortcut-key-driven UI, eliminating the need for a mouse and reducing data entry time by 60%. Features role-based access for CAs and business owners, handling Invoicing, Ledger, GST Filing, P&L, and Balance Sheets in real-time.",
    techStack: ["MERN Stack", "React", "Node.js", "MongoDB", "Express", "JWT"],
    liveUrl: "https://bi-reena-tally-x-sg2i.vercel.app/",
    githubUrl: "https://github.com/Kumarchhotucoder/bi_reena_tallyX",
    repoSlug: "Kumarchhotucoder/bi_reena_tallyX",
    featured: true,
    badgeText: "🔥 Featured Live Project",
    badgeColor: "rgba(240, 148, 51, 0.15)",
    badgeTextColor: "#f09433",
    highlights: [
      "Keyboard-first high-speed bookkeeping & invoicing interface",
      "Real-time Balance Sheet, P&L statements, and GST filing",
      "Role-based multi-tier CA & business owner permission controls"
    ],
    githubStats: {
      stars: 0,
      forks: 0,
      pushedAt: '2026-08-31T11:28:48Z',
      language: 'JavaScript'
    }
  },
  {
    id: "ai-study-buddy",
    title: "AI Study Buddy",
    description: "An AI-powered academic assistant powered by the Google Gemini API. It answers queries, generates summaries, and provides personalized learning support with a real-time chat interface. Includes secure login and personalized chat history.",
    techStack: ["React", "Google Gemini API", "Firebase Auth", "Firestore"],
    liveUrl: "https://friendly-heliotrope-2732e7.netlify.app/",
    githubUrl: "https://github.com/Kumarchhotucoder/Ai-Study-Buddy",
    repoSlug: "Kumarchhotucoder/Ai-Study-Buddy",
    featured: false,
    badgeText: "🤖 AI Powered Assistant",
    badgeColor: "rgba(188, 24, 136, 0.15)",
    badgeTextColor: "#bc1888",
    highlights: [
      "Google Gemini generative AI integration with contextual prompts",
      "Firebase authentication and multi-session chat history persistence"
    ],
    githubStats: {
      stars: 0,
      forks: 0,
      pushedAt: '2025-11-21T15:00:52Z',
      language: 'TypeScript'
    }
  }
];

const formatRelativeTime = (dateString) => {
  if (!dateString) return 'Recently';
  try {
    const date = new Date(dateString);
    const now = new Date();
    const diffInSeconds = Math.floor((now - date) / 1000);
    if (diffInSeconds < 60) return 'Just now';
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) return `${diffInHours}h ago`;
    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays < 30) return `${diffInDays}d ago`;
    const diffInMonths = Math.floor(diffInDays / 30);
    if (diffInMonths < 12) return `${diffInMonths}mo ago`;
    return `${Math.floor(diffInMonths / 12)}y ago`;
  } catch {
    return 'Recently';
  }
};

const Projects = () => {
  const [projects, setProjects] = useState(initialProjects);
  const [isSyncing, setIsSyncing] = useState(true);

  // Auto-sync repository statistics and latest updates directly from GitHub API
  useEffect(() => {
    let isMounted = true;

    const syncWithGitHub = async () => {
      try {
        const updated = await Promise.all(
          initialProjects.map(async (project) => {
            if (!project.repoSlug) return project;
            try {
              const res = await fetch(`https://api.github.com/repos/${project.repoSlug}`);
              if (!res.ok) return project;
              const data = await res.json();
              return {
                ...project,
                githubStats: {
                  stars: data.stargazers_count ?? project.githubStats.stars,
                  forks: data.forks_count ?? project.githubStats.forks,
                  pushedAt: data.pushed_at || project.githubStats.pushedAt,
                  language: data.language || project.githubStats.language,
                  openIssues: data.open_issues_count
                }
              };
            } catch {
              return project;
            }
          })
        );

        if (isMounted) {
          setProjects(updated);
          setLastSyncTime(new Date());
          setIsSyncing(false);
        }
      } catch {
        if (isMounted) setIsSyncing(false);
      }
    };

    syncWithGitHub();
    return () => { isMounted = false; };
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', alignItems: 'center', width: '100%' }}>
      {/* Live Auto-Update GitHub Banner */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.6rem',
          padding: '0.5rem 1.2rem',
          borderRadius: '50px',
          background: 'rgba(34, 197, 94, 0.08)',
          border: '1px solid rgba(34, 197, 94, 0.25)',
          fontSize: '0.85rem',
          color: '#4ade80'
        }}
      >
        <span style={{
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          background: '#22c55e',
          display: 'inline-block',
          boxShadow: '0 0 10px #22c55e',
          animation: 'pulse 2s infinite'
        }} />
        <span>Auto-synced with GitHub repositories in real-time</span>
        {isSyncing && <RefreshCw size={13} className="animate-spin" style={{ opacity: 0.7 }} />}
      </motion.div>

      {projects.map((project, index) => (
        <motion.div
          key={project.id || index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: index * 0.15 }}
          style={{ width: '100%', maxWidth: '880px' }}
        >
          <Tilt tiltMaxAngleX={4} tiltMaxAngleY={4} perspective={1000} transitionSpeed={1500} scale={1.01} glareEnable={true} glareMaxOpacity={0.08} glareColor="white" glarePosition="all" style={{ height: '100%' }}>
            <div className="glass-panel" style={{
              padding: '2.5rem',
              borderRadius: '24px',
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid var(--glass-border)',
              width: '100%',
              textAlign: 'left',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              height: '100%',
              position: 'relative'
            }}>
              <div>
                {/* Header Badges */}
                <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '0.75rem', marginBottom: '1.2rem' }}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', alignItems: 'center' }}>
                    {project.badgeText && (
                      <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        padding: '0.35rem 0.9rem',
                        background: project.badgeColor || 'rgba(240, 148, 51, 0.15)',
                        color: project.badgeTextColor || '#f09433',
                        borderRadius: '50px',
                        fontSize: '0.8rem',
                        fontWeight: 'bold'
                      }}>
                        {project.badgeText}
                      </div>
                    )}

                    <div style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      padding: '0.35rem 0.8rem',
                      borderRadius: '50px',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      fontSize: '0.75rem',
                      color: 'var(--text-secondary)'
                    }}>
                      <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#22c55e', display: 'inline-block' }} />
                      GitHub Synced
                    </div>
                  </div>

                  {/* Live GitHub Stats Pill */}
                  {project.githubStats && (
                    <div style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.8rem',
                      fontSize: '0.78rem',
                      color: 'var(--text-secondary)',
                      background: 'rgba(0,0,0,0.25)',
                      padding: '0.35rem 0.85rem',
                      borderRadius: '8px',
                      border: '1px solid rgba(255,255,255,0.06)'
                    }}>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', color: '#eab308' }}>
                        <Star size={13} fill="#eab308" />
                        <span style={{ color: 'var(--text-primary)', fontWeight: '600' }}>{project.githubStats.stars}</span>
                      </span>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                        <GitFork size={13} />
                        <span style={{ color: 'var(--text-primary)', fontWeight: '600' }}>{project.githubStats.forks}</span>
                      </span>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', color: 'var(--text-secondary)' }}>
                        <Clock size={13} />
                        <span>{formatRelativeTime(project.githubStats.pushedAt)}</span>
                      </span>
                    </div>
                  )}
                </div>

                {/* Title */}
                <h3 style={{ fontSize: '1.9rem', marginBottom: '1rem', color: 'var(--text-primary)', lineHeight: 1.3 }}>
                  {project.title}
                </h3>

                {/* Description */}
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.5rem', fontSize: '1.02rem' }}>
                  {project.description}
                </p>

                {/* Highlights List */}
                {project.highlights && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.8rem' }}>
                    {project.highlights.map((highlight, hIdx) => (
                      <div key={hIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.92rem', color: 'rgba(255,255,255,0.85)' }}>
                        <CheckCircle2 size={16} color="#00d2ff" style={{ flexShrink: 0, marginTop: '3px' }} />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tech Stack */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2.2rem' }}>
                  {project.techStack.map((tech, i) => (
                    <span key={i} style={{
                      padding: '0.35rem 0.85rem',
                      borderRadius: '8px',
                      background: 'rgba(255,255,255,0.05)',
                      fontSize: '0.85rem',
                      color: 'var(--text-primary)',
                      border: '1px solid rgba(255,255,255,0.08)'
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                {project.liveUrl && project.liveUrl !== '#' && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                    <button className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.7rem 1.4rem', fontSize: '0.95rem' }}>
                      <ExternalLink size={18} /> View Live Demo
                    </button>
                  </a>
                )}

                {project.githubUrl && project.githubUrl !== '#' && (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                    <button className="btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.7rem 1.4rem', fontSize: '0.95rem' }}>
                      <FaGithub size={18} /> Source Code
                    </button>
                  </a>
                )}
              </div>
            </div>
          </Tilt>
        </motion.div>
      ))}
    </div>
  );
};

export default Projects;
