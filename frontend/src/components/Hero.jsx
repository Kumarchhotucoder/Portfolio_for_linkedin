import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import Typewriter from 'typewriter-effect';

const Hero = () => {
  return (
    <div className="hero-container" style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      minHeight: '70vh',
      position: 'relative',
      gap: '4rem'
    }}>
      {/* Text Section */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="hero-text" 
        style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left' }}
      >
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="animate-float" 
          style={{
            padding: '0.5rem 1rem',
            borderRadius: '20px',
            border: '1px solid var(--border-color)',
            background: 'rgba(255, 255, 255, 0.05)',
            marginBottom: '2rem',
            fontSize: '1rem',
            fontWeight: '600',
            color: 'var(--accent-secondary)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}
        >
          ✨ <span>I am a </span>
          <Typewriter
            options={{
              strings: ['MERN Stack Developer', 'Problem Solver', 'Tech Enthusiast'],
              autoStart: true,
              loop: true,
              delay: 50,
              deleteSpeed: 30,
            }}
          />
        </motion.div>

        <h1 style={{ fontSize: '4.5rem', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
          Building Digital <br />
          <span className="text-gradient">Experiences</span> That Matter
        </h1>

        <p style={{
          fontSize: '1.2rem',
          color: 'var(--text-secondary)',
          maxWidth: '600px',
          marginBottom: '3rem',
          lineHeight: 1.8
        }}>
          Hi, I'm Chhotu Kumar. I engineer scalable, real-time web applications with modern aesthetics. Passionate about solving complex DSA problems.
        </p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="btn-group" 
          style={{ display: 'flex', gap: '1rem', width: '100%' }}
        >
          <a href="#projects" style={{ textDecoration: 'none' }}>
            <button className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              Explore Work <ArrowRight size={18} />
            </button>
          </a>
          
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <button className="btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              Resume <Download size={18} />
            </button>
          </a>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          style={{ display: 'flex', gap: '1.5rem', marginTop: '2.5rem', flexWrap: 'wrap' }}
        >
          {[
            { value: '2+', label: 'Years Coding' },
            { value: '432+', label: 'LC Solved' },
            { value: '5+', label: 'Live Projects' },
          ].map((stat, i) => (
            <div key={i} style={{
              textAlign: 'center',
              padding: '0.6rem 1.2rem',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '12px',
              minWidth: '80px'
            }}>
              <div style={{ fontSize: '1.4rem', fontWeight: '800', fontFamily: 'var(--font-heading)' }} className="text-gradient">{stat.value}</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '0.1rem' }}>{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Image Section */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="hero-image" 
        style={{ flex: 1, display: 'flex', justifyContent: 'center' }}
      >
        <motion.div 
          animate={{ y: [0, -15, 0] }} 
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
          <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} perspective={1000} transitionSpeed={1000} scale={1.05} glareEnable={true} glareMaxOpacity={0.1} glareColor="white" glarePosition="all" style={{ borderRadius: '50%' }}>
            <div className="hero-img-ring" style={{
              padding: '6px',
              background: 'var(--accent-gradient)',
              borderRadius: '50%',
              boxShadow: '0 10px 40px rgba(220, 39, 67, 0.3)'
            }}>
              <div className="hero-img-circle glass-panel" style={{
                padding: '1rem',
                borderRadius: '50%',
                background: '#ffffff', // Solid white to blend with the photo's background
                width: '320px',
                height: '320px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'hidden'
              }}>
                {/* Using the uploaded profile image cropped to passport size */}
                <img 
                  src="/profile.png" 
                  alt="Chhotu Kumar" 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'top' // Crops the image to focus on the upper body/face
                  }} 
                />
              </div>
            </div>
          </Tilt>
          
          {/* Decorative elements behind image */}
          <div style={{
            position: 'absolute',
            bottom: '-20px',
            right: '-20px',
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            background: 'var(--accent-primary)',
            filter: 'blur(50px)',
            zIndex: -1,
            opacity: 0.6
          }}></div>
          
          <div style={{
            position: 'absolute',
            top: '-20px',
            left: '-20px',
            width: '120px',
            height: '120px',
            borderRadius: '50%',
            background: 'var(--accent-secondary)',
            filter: 'blur(60px)',
            zIndex: -1,
            opacity: 0.4
          }}></div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
