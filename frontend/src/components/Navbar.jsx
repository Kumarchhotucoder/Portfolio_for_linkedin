import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaCode, FaHackerrank } from 'react-icons/fa';
import { SiLeetcode, SiGeeksforgeeks } from 'react-icons/si';
import { Moon, Sun } from 'lucide-react';

const Navbar = () => {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="navbar-wrapper" style={{ padding: '1.5rem 0', display: 'flex', justifyContent: 'center', zIndex: 100, backdropFilter: 'blur(10px)' }}>
      <nav className="navbar glass-panel" style={{
        width: '90%',
        maxWidth: '1200px',
        padding: '1rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: '50px'
      }}>
      <div className="nav-brand" style={{ fontSize: '1.5rem', fontWeight: 'bold', fontFamily: 'var(--font-heading)' }}>
        <span className="text-gradient">Chhotu Kumar</span>
      </div>
      
      <div className="nav-links" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
        <a href="#about" style={{ fontWeight: 500, transition: 'color 0.3s' }} onMouseOver={e => e.target.style.color='var(--accent-primary)'} onMouseOut={e => e.target.style.color='var(--text-primary)'}>About</a>
        <a href="#skills" style={{ fontWeight: 500, transition: 'color 0.3s' }} onMouseOver={e => e.target.style.color='var(--accent-primary)'} onMouseOut={e => e.target.style.color='var(--text-primary)'}>Skills</a>
        <a href="#timeline" style={{ fontWeight: 500, transition: 'color 0.3s' }} onMouseOver={e => e.target.style.color='var(--accent-primary)'} onMouseOut={e => e.target.style.color='var(--text-primary)'}>Journey</a>
        <a href="#projects" style={{ fontWeight: 500, transition: 'color 0.3s' }} onMouseOver={e => e.target.style.color='var(--accent-primary)'} onMouseOut={e => e.target.style.color='var(--text-primary)'}>Projects</a>
        <a href="#contact" style={{ fontWeight: 500, transition: 'color 0.3s' }} onMouseOver={e => e.target.style.color='var(--accent-primary)'} onMouseOut={e => e.target.style.color='var(--text-primary)'}>Contact</a>
      </div>

      <div className="social-links" style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
        <button onClick={toggleTheme} style={{ 
          background: 'transparent', 
          border: 'none', 
          cursor: 'pointer', 
          color: 'var(--text-primary)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0.5rem',
          marginRight: '0.5rem'
        }}>
          {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        <a href="https://github.com/Kumarchhotucoder" target="_blank" rel="noreferrer" style={{ padding: '0.5rem', border: '1px solid var(--border-color)', borderRadius: '8px', display: 'flex', color: 'var(--text-primary)' }}>
          <FaGithub size={20} />
        </a>
        <a href="https://www.linkedin.com/in/chhotu-kumar-b9443628b/" target="_blank" rel="noreferrer" style={{ padding: '0.5rem', border: '1px solid var(--border-color)', borderRadius: '8px', display: 'flex', color: '#0077b5' }}>
          <FaLinkedin size={20} />
        </a>
        <a href="https://leetcode.com/u/CHHOTUXCODER/" target="_blank" rel="noreferrer" style={{ padding: '0.5rem', border: '1px solid var(--border-color)', borderRadius: '8px', display: 'flex', color: '#FFA116' }}>
          <SiLeetcode size={20} />
        </a>
        <a href="https://www.geeksforgeeks.org/profile/chhotusingh?tab=activity" target="_blank" rel="noreferrer" style={{ padding: '0.5rem', border: '1px solid var(--border-color)', borderRadius: '8px', display: 'flex', color: '#2F8D46' }}>
          <SiGeeksforgeeks size={20} />
        </a>
        <a href="https://codolio.com/profile/chhotusingh" target="_blank" rel="noreferrer" style={{ padding: '0.5rem', border: '1px solid var(--border-color)', borderRadius: '8px', display: 'flex', color: '#00d2ff', title: 'Codolio' }}>
          <FaCode size={20} />
        </a>
        <a href="https://www.hackerrank.com/profile/chhotu6826" target="_blank" rel="noreferrer" style={{ padding: '0.5rem', border: '1px solid var(--border-color)', borderRadius: '8px', display: 'flex', color: '#2EC866', title: 'HackerRank' }}>
          <FaHackerrank size={20} />
        </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
