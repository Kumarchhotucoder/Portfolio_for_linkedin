import React from 'react';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

const projectsData = [
  {
    title: "BireeAntallyX — Accounting Software",
    description: "A lightning-fast, full-stack accounting SaaS with a shortcut-key-driven UI, eliminating the need for a mouse and reducing data entry time by 60%. Features role-based access for CAs and business owners, handling Invoicing, Ledger, GST Filing, P&L, and Balance Sheets in real-time.",
    techStack: ["MERN Stack", "React", "Node.js", "MongoDB", "Express", "JWT"],
    liveUrl: "https://bi-reena-tally-x-sg2i.vercel.app/",
    githubUrl: "https://github.com/Kumarchhotucoder",
    featured: true
  },
  {
    title: "AI Study Buddy",
    description: "An AI-powered academic assistant powered by the Google Gemini API. It answers queries, generates summaries, and provides personalized learning support with a real-time chat interface. Includes secure login and personalized chat history.",
    techStack: ["React", "Google Gemini API", "Firebase Auth", "Firestore"],
    liveUrl: "https://friendly-heliotrope-2732e7.netlify.app/", 
    githubUrl: "https://github.com/Kumarchhotucoder", 
    featured: false
  }
];

const Projects = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', alignItems: 'center' }}>
      {projectsData.map((project, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          style={{ width: '100%', maxWidth: '850px' }}
        >
          <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} perspective={1000} transitionSpeed={1500} scale={1.02} glareEnable={true} glareMaxOpacity={0.1} glareColor="white" glarePosition="all" style={{ height: '100%' }}>
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
              height: '100%'
            }}>
              <div>
                {project.featured && (
                  <div style={{ 
                    display: 'inline-block', 
                    padding: '0.4rem 1rem', 
                    background: 'rgba(240, 148, 51, 0.15)', 
                    color: '#f09433', 
                    borderRadius: '50px', 
                    fontSize: '0.8rem', 
                    fontWeight: 'bold',
                    marginBottom: '1.2rem' 
                  }}>
                    🔥 Featured Live Project
                  </div>
                )}
                
                <h3 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>{project.title}</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '2rem', fontSize: '1.05rem' }}>
                  {project.description}
                </p>
                
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginBottom: '2.5rem' }}>
                  {project.techStack.map((tech, i) => (
                    <span key={i} style={{
                      padding: '0.4rem 1rem',
                      borderRadius: '8px',
                      background: 'rgba(255,255,255,0.06)',
                      fontSize: '0.9rem',
                      color: 'var(--text-primary)',
                      border: '1px solid rgba(255,255,255,0.05)'
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1.2rem' }}>
                {project.liveUrl && project.liveUrl !== '#' && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                    <button className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.7rem 1.5rem', fontSize: '0.95rem' }}>
                      <ExternalLink size={18} /> View Live Demo
                    </button>
                  </a>
                )}
                
                {project.githubUrl && project.githubUrl !== '#' && (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                    <button className="btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.7rem 1.5rem', fontSize: '0.95rem' }}>
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
