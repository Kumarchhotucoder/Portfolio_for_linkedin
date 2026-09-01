import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { SiLeetcode, SiGeeksforgeeks } from 'react-icons/si';
import { Code } from 'lucide-react';

// Realistic base hours (update these to your actual estimated hours)
const BASE_HOURS = {
  // LeetCode: solving ~600 problems, avg ~30 mins each
  leetcode: 312.0,
  // GeeksForGeeks: practice sessions since May 2023
  gfg: 180.0,
  // Development: projects, internships, self learning
  dev: 720.0
};

// Speed at which counter ticks (hours added per second, simulated in real-time)
// e.g., 0.001 means in 1 second, 0.001 hours passes = about 3.6 seconds per "real" second of coding
const TICK_PER_SECOND = {
  leetcode: 0.00027,  // ~1 hr per hour of real time
  gfg: 0.00018,
  dev: 0.00042
};

const INTERVAL_MS = 50; // update every 50ms

const CodingHoursTracker = () => {
  const [hours, setHours] = useState(BASE_HOURS);

  useEffect(() => {
    const incrementPerTick = {
      leetcode: (TICK_PER_SECOND.leetcode * INTERVAL_MS) / 1000,
      gfg: (TICK_PER_SECOND.gfg * INTERVAL_MS) / 1000,
      dev: (TICK_PER_SECOND.dev * INTERVAL_MS) / 1000
    };

    const intervalId = setInterval(() => {
      setHours(prev => ({
        leetcode: parseFloat((prev.leetcode + incrementPerTick.leetcode).toFixed(4)),
        gfg: parseFloat((prev.gfg + incrementPerTick.gfg).toFixed(4)),
        dev: parseFloat((prev.dev + incrementPerTick.dev).toFixed(4)),
      }));
    }, INTERVAL_MS);

    return () => clearInterval(intervalId);
  }, []);

  const trackers = [
    {
      id: 1,
      title: "LeetCode Grind",
      value: hours.leetcode,
      icon: <SiLeetcode size={28} color="#FFA116" />,
      color: "rgba(255, 161, 22, 0.1)",
      border: "rgba(255, 161, 22, 0.3)"
    },
    {
      id: 2,
      title: "GFG Practice",
      value: hours.gfg,
      icon: <SiGeeksforgeeks size={28} color="#2F8D46" />,
      color: "rgba(47, 141, 70, 0.1)",
      border: "rgba(47, 141, 70, 0.3)"
    },
    {
      id: 3,
      title: "Development",
      value: hours.dev,
      icon: <Code size={28} color="#00d2ff" />,
      color: "rgba(0, 210, 255, 0.1)",
      border: "rgba(0, 210, 255, 0.3)"
    }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '2rem',
        width: '100%',
        maxWidth: '1000px'
      }}>
        {trackers.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            style={{ flex: '1 1 250px', maxWidth: '300px' }}
          >
            <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} perspective={1000} transitionSpeed={1000} scale={1.05} glareEnable={true} glareMaxOpacity={0.2} glareColor="white" glarePosition="all" style={{ height: '100%' }}>
              <div className="glass-panel" style={{
                padding: '2rem',
                borderRadius: '24px',
                background: item.color,
                border: `1px solid ${item.border}`,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
                boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
              }}>
                <div style={{ marginBottom: '1rem', background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '50%' }}>
                  {item.icon}
                </div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--text-primary)', textAlign: 'center' }}>
                  {item.title}
                </h3>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.25rem' }}>
                  <span style={{ fontSize: '2.5rem', fontWeight: 'bold', fontFamily: 'monospace', color: 'var(--text-primary)', textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
                    {item.value}
                  </span>
                  <span style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>hrs</span>
                </div>
              </div>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CodingHoursTracker;
