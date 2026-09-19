import React from 'react';
import { Briefcase, GraduationCap, Code } from 'lucide-react';
import { motion } from 'framer-motion';

const Timeline = () => {
  const timelineData = [
    {
      id: 1,
      type: 'work',
      title: 'Software Developer Intern',
      subtitle: 'Bireena Info Tech',
      date: 'Feb 2026 - Present',
      description: 'Gaining hands-on experience in building full-stack applications, REST APIs, MongoDB-based systems, authentication, and cloud-based solutions.',
      icon: <Briefcase size={20} />
    },
    {
      id: 2,
      type: 'project',
      title: 'Full-Stack SaaS Architect',
      subtitle: 'SecurePrint — Multi-Tenant Cloud Printing',
      date: 'Sep 2026',
      description: 'Architected a multi-tenant printing SaaS with permanent QR shop routing, Razorpay payment verification, WebSocket live queues, and 10-second cryptographic auto-deletion.',
      icon: <Code size={20} />
    },
    {
      id: 3,
      type: 'project',
      title: 'Core Full-Stack Developer',
      subtitle: 'Smart Library Management System',
      date: 'Sep 2026',
      description: 'Engineered a production-ready physical library portal featuring dynamic HMAC-SHA256 encrypted QR attendance, real-time 50-seat layout sync, and automated Excel reporting.',
      icon: <Code size={20} />
    },
    {
      id: 3,
      type: 'project',
      title: 'Full-Stack Developer',
      subtitle: 'BireenaTallyX',
      date: '2025 - 2026',
      description: 'Built a full-stack accounting platform designed around keyboard-first workflows, handling Invoice, Ledger, GST Filing, and more.',
      icon: <Code size={20} />
    },
    {
      id: 3,
      type: 'project',
      title: 'Self-Learning & Development',
      subtitle: 'Rungta College of Engineering and Technology',
      date: '2025',
      description: 'Dedicated time during college to learn new technologies on my own and build practical projects to strengthen my development skills.',
      icon: <Code size={20} />
    },
    {
      id: 4,
      type: 'project',
      title: 'AI Integration Developer',
      subtitle: 'AI Study Buddy',
      date: '2024',
      description: 'Built an AI-powered learning assistant using Google Gemini API, Firebase Auth, and Firestore for real-time personalized learning.',
      icon: <Code size={20} />
    },
    {
      id: 5,
      type: 'education',
      title: 'B.Tech in Information Technology',
      subtitle: 'Rungta College of Engineering and Technology',
      date: '2023 - 2027',
      description: 'Building a strong foundation in Java, Data Structures & Algorithms, Web Development, and Database Management.',
      icon: <GraduationCap size={20} />
    }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '4rem', width: '100%' }}>
      <h2 style={{ fontSize: '2.5rem', marginBottom: '4rem', textAlign: 'center', fontFamily: 'var(--font-heading)' }}>
        My <span className="text-gradient">Journey</span>
      </h2>

      <div style={{ position: 'relative', width: '100%', maxWidth: '800px', margin: '0 auto' }}>
        {/* Center Line */}
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: '100%' }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          style={{
            position: 'absolute',
            left: '50%',
            top: 0,
            bottom: 0,
            width: '2px',
            background: 'linear-gradient(to bottom, transparent, var(--accent-primary), var(--accent-secondary), transparent)',
            transform: 'translateX(-50%)'
          }}
        ></motion.div>

        {timelineData.map((item, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: isEven ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              style={{
                position: 'relative',
                width: '100%',
                display: 'flex',
                justifyContent: isEven ? 'flex-start' : 'flex-end',
                marginBottom: '3rem'
              }}
            >
              {/* Timeline Dot */}
              <div style={{
                position: 'absolute',
                left: '50%',
                top: '20px',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: 'var(--bg-secondary)',
                border: '2px solid var(--accent-primary)',
                transform: 'translate(-50%, -50%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-primary)',
                zIndex: 2,
                boxShadow: '0 0 15px rgba(220, 39, 67, 0.4)'
              }}>
                {item.icon}
              </div>

              {/* Content Card */}
              <div style={{ width: '45%' }}>
                <div className="glass-panel" style={{
                  padding: '2rem',
                  borderRadius: '16px',
                  textAlign: isEven ? 'right' : 'left',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  position: 'relative'
                }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = '0 15px 30px rgba(220, 39, 67, 0.1)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}>

                  <span style={{ display: 'inline-block', padding: '0.3rem 0.8rem', background: 'rgba(255,255,255,0.05)', borderRadius: '20px', fontSize: '0.85rem', color: 'var(--accent-primary)', marginBottom: '1rem', fontWeight: 'bold' }}>
                    {item.date}
                  </span>

                  <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>{item.title}</h3>
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: 'var(--text-secondary)' }}>{item.subtitle}</h4>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>{item.description}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Timeline;
