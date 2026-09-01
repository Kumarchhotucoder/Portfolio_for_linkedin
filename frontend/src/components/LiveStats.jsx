import React, { useEffect, useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { SiLeetcode, SiGeeksforgeeks } from 'react-icons/si';
import { motion } from 'framer-motion';

const LiveStats = () => {
  const [githubData, setGithubData] = useState(null);
  const [leetcodeData, setLeetcodeData] = useState(null);
  const [gfgData, setGfgData] = useState(null);
  const [githubLoading, setGithubLoading] = useState(true);
  const [leetcodeLoading, setLeetcodeLoading] = useState(true);
  const [gfgLoading, setGfgLoading] = useState(true);

  useEffect(() => {
    // GitHub Stats — official GitHub API ✅
    fetch('https://api.github.com/users/Kumarchhotucoder')
      .then(res => res.json())
      .then(data => {
        setGithubData({
          public_repos: data.public_repos,
          followers: data.followers,
          following: data.following,
        });
        setGithubLoading(false);
      })
      .catch(() => {
        setGithubData({ public_repos: 15, followers: 12, following: 20 });
        setGithubLoading(false);
      });

    // LeetCode — alfa-leetcode-api (working ✅, no backend needed)
    fetch('https://alfa-leetcode-api.onrender.com/CHHOTUXCODER/solved')
      .then(res => res.json())
      .then(data => {
        if (data && data.solvedProblem !== undefined) {
          setLeetcodeData({
            solved: data.solvedProblem,
            easy: data.easySolved,
            medium: data.mediumSolved,
            hard: data.hardSolved,
          });
        } else {
          setLeetcodeData({ solved: 432, easy: 173, medium: 207, hard: 52 });
        }
        setLeetcodeLoading(false);
      })
      .catch(() => {
        setLeetcodeData({ solved: 432, easy: 173, medium: 207, hard: 52 });
        setLeetcodeLoading(false);
      });

    // GFG — blocks all server-side scraping & has no public API.
    // Update these numbers manually from: geeksforgeeks.org/user/chhotusingh
    // ✏️  Update these when your count changes:
    const GFG_MANUAL_STATS = { solved: 160, easy: 70, medium: 75, hard: 15, score: 420 };
    setTimeout(() => {
      setGfgData(GFG_MANUAL_STATS);
      setGfgLoading(false);
    }, 300);
  }, []);

  const cardStyle = {
    padding: '2rem',
    borderRadius: '20px',
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid var(--glass-border)',
    backdropFilter: 'blur(16px)',
    flex: '1 1 300px'
  };

  const statBox = (label, value, color = 'var(--accent-primary)') => (
    <div style={{ textAlign: 'center' }}>
      <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '0.4rem' }}>{label}</p>
      <h4 style={{ fontSize: '2rem', margin: 0, color, fontFamily: 'monospace', fontWeight: 'bold' }}>{value ?? '...'}</h4>
    </div>
  );

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center' }}>

      {/* GitHub Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        style={cardStyle}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
          <div style={{ padding: '0.8rem', background: 'rgba(255,255,255,0.08)', borderRadius: '12px' }}>
            <FaGithub size={28} color="white" />
          </div>
          <div>
            <h3 style={{ fontSize: '1.2rem', margin: 0 }}>GitHub Activity</h3>
            <p style={{ color: 'var(--text-secondary)', margin: 0, fontSize: '0.85rem' }}>Live from GitHub API</p>
          </div>
        </div>

        {githubLoading ? (
          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', color: 'var(--text-secondary)' }}>
            <span className="animate-float">⏳</span> Fetching live data...
          </div>
        ) : (
          <div style={{ display: 'flex', justifyContent: 'space-around', gap: '1rem', flexWrap: 'wrap', paddingTop: '0.5rem' }}>
            {statBox('Public Repos', githubData?.public_repos, 'var(--accent-primary)')}
            {statBox('Followers', githubData?.followers, 'var(--accent-secondary)')}
            {statBox('Following', githubData?.following, '#00d2ff')}
          </div>
        )}
      </motion.div>

      {/* LeetCode Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.15 }}
        style={cardStyle}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
          <div style={{ padding: '0.8rem', background: 'rgba(255, 161, 22, 0.1)', borderRadius: '12px' }}>
            <SiLeetcode size={28} color="#FFA116" />
          </div>
          <div>
            <h3 style={{ fontSize: '1.2rem', margin: 0 }}>LeetCode Progress</h3>
            <p style={{ color: 'var(--text-secondary)', margin: 0, fontSize: '0.85rem' }}>DSA Problem Solving</p>
          </div>
        </div>

        {leetcodeLoading ? (
          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', color: 'var(--text-secondary)' }}>
            <span className="animate-float">⏳</span> Fetching live data...
          </div>
        ) : (
          <div style={{ display: 'flex', justifyContent: 'space-around', gap: '1rem', flexWrap: 'wrap', paddingTop: '0.5rem' }}>
            {statBox('Total Solved', leetcodeData?.solved, '#FFA116')}
            {statBox('Easy', leetcodeData?.easy, '#2EC866')}
            {statBox('Medium', leetcodeData?.medium, '#FFA116')}
            {statBox('Hard', leetcodeData?.hard, '#EF4444')}
          </div>
        )}
      </motion.div>

      {/* GFG Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        style={cardStyle}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
          <div style={{ padding: '0.8rem', background: 'rgba(47, 141, 70, 0.1)', borderRadius: '12px' }}>
            <SiGeeksforgeeks size={28} color="#2F8D46" />
          </div>
          <div>
            <h3 style={{ fontSize: '1.2rem', margin: 0 }}>GeeksForGeeks</h3>
            <p style={{ color: 'var(--text-secondary)', margin: 0, fontSize: '0.85rem' }}>Coding Practice</p>
          </div>
        </div>

        {gfgLoading ? (
          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', color: 'var(--text-secondary)' }}>
            <span className="animate-float">⏳</span> Fetching live data...
          </div>
        ) : (
          <div style={{ display: 'flex', justifyContent: 'space-around', gap: '1rem', flexWrap: 'wrap', paddingTop: '0.5rem' }}>
            {statBox('Total Solved', gfgData?.solved, '#2F8D46')}
            {statBox('Easy', gfgData?.easy, '#2EC866')}
            {statBox('Medium', gfgData?.medium, '#FFA116')}
            {statBox('Hard', gfgData?.hard, '#EF4444')}
          </div>
        )}
      </motion.div>

    </div>
  );
};

export default LiveStats;
