import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

const About = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: '4rem',
      width: '100%'
    }}>
      <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center', fontFamily: 'var(--font-heading)' }}>
        About <span className="text-gradient">Me</span>
      </h2>

      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '4rem',
        width: '100%',
        maxWidth: '1000px',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        
        {/* Left Side: Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          style={{ flex: '1 1 500px', display: 'flex', flexDirection: 'column', gap: '1.5rem', textAlign: 'left' }}
        >
          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
            My journey in technology started with a curiosity to understand how software works and how technology can solve real-world problems. I am currently pursuing my B.Tech in Information Technology at <strong style={{ color: 'var(--text-primary)' }}>Rungta College of Engineering and Technology (2023–2027)</strong>.
          </p>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
            I gradually moved from solving coding problems to developing complete, real-world applications using <strong style={{ color: 'var(--text-primary)' }}>React.js, Node.js, Express.js, MongoDB, and cloud technologies</strong>. I am currently working as a Software Developer Intern at Bireena Info Tech.
          </p>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
            Alongside development, I have consistently worked on Data Structures & Algorithms, solving <strong style={{ color: 'var(--text-primary)' }}>600+ problems across LeetCode and GeeksForGeeks</strong>. My goal is to build impactful products, keep learning continuously, and turn complex problems into simple, scalable solutions.
          </p>
        </motion.div>

        {/* Right Side: Visual / Decorative */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ flex: '1 1 400px', display: 'flex', justifyContent: 'center', position: 'relative' }}
        >
          <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} perspective={1000} transitionSpeed={1500} scale={1.05} glareEnable={true} glareMaxOpacity={0.2} glareColor="white" glarePosition="all">
            <div className="glass-panel" style={{
              width: '300px',
              height: '300px',
              borderRadius: '24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'linear-gradient(135deg, rgba(220, 39, 67, 0.1), rgba(188, 24, 136, 0.1))',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 20px 40px rgba(0,0,0,0.4), inset 0 0 0 1px rgba(255,255,255,0.1)'
            }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', fontFamily: 'var(--font-heading)', textAlign: 'center', lineHeight: '1.5' }}>
                "Code is poetry,<br/><span className="text-gradient">Logic is art."</span>
              </h3>
            </div>
          </Tilt>
          {/* Decorative glowing blobs */}
          <div style={{
            position: 'absolute',
            top: '-20px',
            right: '-20px',
            width: '100px',
            height: '100px',
            background: 'var(--accent-primary)',
            borderRadius: '50%',
            filter: 'blur(50px)',
            opacity: 0.5,
            zIndex: -1
          }}></div>
          <div style={{
            position: 'absolute',
            bottom: '-20px',
            left: '-20px',
            width: '120px',
            height: '120px',
            background: 'var(--accent-secondary)',
            borderRadius: '50%',
            filter: 'blur(60px)',
            opacity: 0.4,
            zIndex: -1
          }}></div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
