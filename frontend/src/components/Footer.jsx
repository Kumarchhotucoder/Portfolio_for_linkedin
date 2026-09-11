import React from 'react';
import { FaGithub, FaLinkedin, FaCode, FaHackerrank, FaWhatsapp } from 'react-icons/fa';
import { SiLeetcode, SiGeeksforgeeks } from 'react-icons/si';

const Footer = () => {
  return (
    <footer style={{
      width: '100%',
      padding: '3rem 2rem',
      marginTop: '4rem',
      background: 'var(--glass-bg)',
      borderTop: '1px solid var(--glass-border)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '2rem'
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
        <h2 style={{ fontSize: '2rem', fontFamily: 'var(--font-heading)', fontWeight: 'bold' }}>
          <span className="text-gradient">Chhotu Kumar</span>
        </h2>
        <p style={{ color: 'var(--text-secondary)', textAlign: 'center', maxWidth: '400px' }}>
          Engineering scalable web applications and solving complex problems with modern aesthetics.
        </p>

        {/* Direct WhatsApp Action Button in Footer */}
        <a
          href="https://wa.me/917766861339?text=Hi%20Chhotu,%20I%20saw%20your%20portfolio%20and%20wanted%20to%20reach%20out!"
          target="_blank"
          rel="noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.75rem',
            background: 'rgba(37, 211, 102, 0.12)',
            border: '1px solid rgba(37, 211, 102, 0.5)',
            color: '#25D366',
            padding: '0.75rem 1.6rem',
            borderRadius: '50px',
            fontWeight: '600',
            fontSize: '1rem',
            transition: 'all 0.3s ease',
            textDecoration: 'none',
            marginTop: '0.5rem',
            boxShadow: '0 4px 15px rgba(37, 211, 102, 0.15)'
          }}
          onMouseOver={e => {
            e.currentTarget.style.background = '#25D366';
            e.currentTarget.style.color = '#ffffff';
            e.currentTarget.style.transform = 'translateY(-3px)';
            e.currentTarget.style.boxShadow = '0 8px 25px rgba(37, 211, 102, 0.4)';
          }}
          onMouseOut={e => {
            e.currentTarget.style.background = 'rgba(37, 211, 102, 0.12)';
            e.currentTarget.style.color = '#25D366';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 15px rgba(37, 211, 102, 0.15)';
          }}
        >
          <FaWhatsapp size={22} />
          <span>Chat on WhatsApp: +91 7766861339</span>
        </a>
      </div>

      <div className="social-links" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <a href="https://wa.me/917766861339?text=Hi%20Chhotu,%20I%20saw%20your%20portfolio!" target="_blank" rel="noreferrer" title="WhatsApp: +91 7766861339" style={{ padding: '0.5rem', border: '1px solid rgba(37, 211, 102, 0.4)', borderRadius: '8px', display: 'flex', color: '#25D366', background: 'rgba(37, 211, 102, 0.08)', transition: 'all 0.3s ease' }} onMouseOver={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.background = '#25D366'; e.currentTarget.style.color = '#fff'; }} onMouseOut={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.background = 'rgba(37, 211, 102, 0.08)'; e.currentTarget.style.color = '#25D366'; }}>
          <FaWhatsapp size={24} />
        </a>
        <a href="https://github.com/Kumarchhotucoder" target="_blank" rel="noreferrer" style={{ padding: '0.5rem', border: '1px solid var(--border-color)', borderRadius: '8px', display: 'flex', transition: 'all 0.3s ease' }} onMouseOver={e => e.currentTarget.style.transform = 'translateY(-3px)'} onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}>
          <FaGithub size={24} />
        </a>
        <a href="https://www.linkedin.com/in/chhotu-kumar-b9443628b/" target="_blank" rel="noreferrer" style={{ padding: '0.5rem', border: '1px solid var(--border-color)', borderRadius: '8px', display: 'flex', color: '#0077b5', transition: 'all 0.3s ease' }} onMouseOver={e => e.currentTarget.style.transform = 'translateY(-3px)'} onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}>
          <FaLinkedin size={24} />
        </a>
        <a href="https://leetcode.com/u/CHHOTUXCODER/" target="_blank" rel="noreferrer" style={{ padding: '0.5rem', border: '1px solid var(--border-color)', borderRadius: '8px', display: 'flex', color: '#FFA116', transition: 'all 0.3s ease' }} onMouseOver={e => e.currentTarget.style.transform = 'translateY(-3px)'} onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}>
          <SiLeetcode size={24} />
        </a>
        <a href="https://www.geeksforgeeks.org/profile/chhotusingh?tab=activity" target="_blank" rel="noreferrer" style={{ padding: '0.5rem', border: '1px solid var(--border-color)', borderRadius: '8px', display: 'flex', color: '#2F8D46', transition: 'all 0.3s ease' }} onMouseOver={e => e.currentTarget.style.transform = 'translateY(-3px)'} onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}>
          <SiGeeksforgeeks size={24} />
        </a>
        <a href="https://codolio.com/profile/chhotusingh" target="_blank" rel="noreferrer" style={{ padding: '0.5rem', border: '1px solid var(--border-color)', borderRadius: '8px', display: 'flex', color: '#00d2ff', title: 'Codolio', transition: 'all 0.3s ease' }} onMouseOver={e => e.currentTarget.style.transform = 'translateY(-3px)'} onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}>
          <FaCode size={24} />
        </a>
        <a href="https://www.hackerrank.com/profile/chhotu6826" target="_blank" rel="noreferrer" style={{ padding: '0.5rem', border: '1px solid var(--border-color)', borderRadius: '8px', display: 'flex', color: '#2EC866', title: 'HackerRank', transition: 'all 0.3s ease' }} onMouseOver={e => e.currentTarget.style.transform = 'translateY(-3px)'} onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}>
          <FaHackerrank size={24} />
        </a>
      </div>

      <div style={{ width: '100%', height: '1px', background: 'var(--glass-border)', margin: '1rem 0' }}></div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
          &copy; {new Date().getFullYear()} Chhotu Kumar. All rights reserved.
        </p>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          Built with React <span style={{ color: 'var(--accent-primary)' }}>♥</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
