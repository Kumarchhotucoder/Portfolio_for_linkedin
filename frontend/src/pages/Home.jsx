import React from 'react';
import Hero from '../components/Hero';
import LiveStats from '../components/LiveStats';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import About from '../components/About';
import Skills from '../components/Skills';
import Timeline from '../components/Timeline';
import CodingHoursTracker from '../components/CodingHoursTracker';

const SectionHeading = ({ title, highlight, subtitle }) => (
  <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
    <h2 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-heading)', margin: 0 }}>
      {title} <span className="text-gradient">{highlight}</span>
    </h2>
    <div className="section-divider" />
    {subtitle && <p style={{ color: 'var(--text-secondary)', maxWidth: '500px', margin: '0 auto' }}>{subtitle}</p>}
  </div>
);

const Home = () => {
  return (
    <div className="container" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
      <Hero />
      
      {/* About Section */}
      <section id="about" style={{ marginTop: '8rem' }}>
        <About />
      </section>

      {/* Skills Section */}
      <section id="skills" style={{ marginTop: '8rem' }}>
        <Skills />
      </section>

      {/* Timeline Section */}
      <section id="timeline" style={{ marginTop: '8rem' }}>
        <Timeline />
      </section>

      {/* Stats Section */}
      <section id="stats" style={{ marginTop: '8rem' }}>
        <SectionHeading title="Live" highlight="Statistics" subtitle="Real-time data from GitHub, LeetCode & coding trackers" />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
          <LiveStats />
          <CodingHoursTracker />
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" style={{ marginTop: '8rem' }}>
        <SectionHeading title="Featured" highlight="Projects" subtitle="Handpicked real-world applications I've built" />
        <Projects />
      </section>

      {/* Contact Section */}
      <section id="contact" style={{ marginTop: '8rem', textAlign: 'center' }}>
        <Contact />
      </section>
    </div>
  );
};

export default Home;
