import React from 'react';
import { motion } from 'framer-motion';
import {
  SiReact, SiJavascript, SiTypescript, SiHtml5, SiCss, SiTailwindcss, SiRedux,
  SiNodedotjs, SiExpress, SiMongodb,
  SiC, SiGit, SiGithub, SiPostman, SiVercel,
  SiFirebase
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { Database, Code2, Cpu, Wrench, Lock } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend',
    icon: <Code2 size={22} />,
    color: '#61DAFB',
    skills: [
      { name: 'React.js', icon: <SiReact />, level: 90, color: '#61DAFB' },
      { name: 'JavaScript', icon: <SiJavascript />, level: 88, color: '#F7DF1E' },
      { name: 'TypeScript', icon: <SiTypescript />, level: 84, color: '#3178C6' },
      { name: 'HTML5', icon: <SiHtml5 />, level: 95, color: '#E34F26' },
      { name: 'CSS3', icon: <SiCss />, level: 85, color: '#1572B6' },
      { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 82, color: '#06B6D4' },
      { name: 'Redux', icon: <SiRedux />, level: 75, color: '#764ABC' },
    ]
  },
  {
    title: 'Backend',
    icon: <Database size={22} />,
    color: '#68D391',
    skills: [
      { name: 'Node.js', icon: <SiNodedotjs />, level: 85, color: '#339933' },
      { name: 'Express.js', icon: <SiExpress />, level: 82, color: '#ffffff' },
      { name: 'MongoDB', icon: <SiMongodb />, level: 80, color: '#47A248' },
      { name: 'REST APIs', icon: <Database size={16} />, level: 88, color: '#00d2ff' },
      { name: 'JWT Auth', icon: <Lock size={16} />, level: 78, color: '#d63aff' },
    ]
  },
  {
    title: 'Languages & CS',
    icon: <Cpu size={22} />,
    color: '#F6AD55',
    skills: [
      { name: 'C', icon: <SiC />, level: 85, color: '#A8B9CC' },
      { name: 'Java', icon: <FaJava />, level: 75, color: '#ED8B00' },
      { name: 'DSA', icon: <Cpu size={16} />, level: 80, color: '#FFA116' },
      { name: 'OOP', icon: <Code2 size={16} />, level: 85, color: '#bc1888' },
    ]
  },
  {
    title: 'Tools & Platforms',
    icon: <Wrench size={22} />,
    color: '#76E4F7',
    skills: [
      { name: 'Git', icon: <SiGit />, level: 88, color: '#F05032' },
      { name: 'GitHub', icon: <SiGithub />, level: 90, color: '#ffffff' },
      { name: 'Postman', icon: <SiPostman />, level: 85, color: '#FF6C37' },
      { name: 'Vercel', icon: <SiVercel />, level: 82, color: '#ffffff' },
      { name: 'Firebase', icon: <SiFirebase />, level: 72, color: '#FFCA28' },
    ]
  }
];

const SkillBar = ({ name, icon, level, color }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    style={{ marginBottom: '0.9rem' }}
  >
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
      <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem', color: 'var(--text-primary)' }}>
        <span style={{ color, fontSize: '1.1rem' }}>{icon}</span>
        {name}
      </span>
      <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontFamily: 'monospace' }}>{level}%</span>
    </div>
    <div style={{ height: '6px', borderRadius: '999px', background: 'rgba(255,255,255,0.07)', overflow: 'hidden' }}>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
        style={{
          height: '100%',
          borderRadius: '999px',
          background: `linear-gradient(90deg, ${color}88, ${color})`,
          boxShadow: `0 0 8px ${color}66`
        }}
      />
    </div>
  </motion.div>
);

const Skills = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '4rem', width: '100%' }}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ fontSize: '2.5rem', marginBottom: '0.75rem', textAlign: 'center', fontFamily: 'var(--font-heading)' }}
      >
        Skills &amp; <span className="text-gradient">Expertise</span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        style={{ color: 'var(--text-secondary)', marginBottom: '3rem', textAlign: 'center', maxWidth: '500px' }}
      >
        Technologies I use to craft scalable digital experiences
      </motion.p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '2rem',
        width: '100%',
        maxWidth: '1200px'
      }}>
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass-panel"
            style={{ padding: '2rem', borderRadius: '20px', position: 'relative', overflow: 'hidden' }}
          >
            {/* Subtle glow accent */}
            <div style={{
              position: 'absolute', top: 0, right: 0,
              width: '80px', height: '80px',
              borderRadius: '50%',
              background: category.color,
              filter: 'blur(50px)',
              opacity: 0.12,
              pointerEvents: 'none'
            }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <span style={{ color: category.color, background: `${category.color}18`, padding: '0.5rem', borderRadius: '10px', display: 'flex' }}>
                {category.icon}
              </span>
              <h3 style={{ fontSize: '1.15rem', color: 'var(--text-primary)' }}>{category.title}</h3>
            </div>
            {category.skills.map((skill, i) => (
              <SkillBar key={i} {...skill} />
            ))}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
