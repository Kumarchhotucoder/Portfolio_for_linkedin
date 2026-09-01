const express = require('express');
const axios = require('axios');
const router = express.Router();

// Simple in-memory cache
let githubCache = { data: null, timestamp: 0 };
let leetcodeCache = { data: null, timestamp: 0 };
const CACHE_DURATION = 15 * 60 * 1000; // 15 minutes

router.get('/github/:username', async (req, res) => {
  const { username } = req.params;
  
  if (githubCache.data && (Date.now() - githubCache.timestamp < CACHE_DURATION)) {
    return res.json(githubCache.data);
  }

  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    githubCache = { data: response.data, timestamp: Date.now() };
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching GitHub data' });
  }
});

router.get('/leetcode/:username', async (req, res) => {
  const { username } = req.params;
  
  if (leetcodeCache.data && (Date.now() - leetcodeCache.timestamp < CACHE_DURATION)) {
    return res.json(leetcodeCache.data);
  }

  try {
    // LeetCode GraphQL API endpoint
    const response = await axios.post('https://leetcode.com/graphql', {
      query: `
        query getUserProfile($username: String!) {
          matchedUser(username: $username) {
            submitStats: submitStatsGlobal {
              acSubmissionNum {
                difficulty
                count
                submissions
              }
            }
          }
        }
      `,
      variables: { username }
    });
    
    leetcodeCache = { data: response.data.data.matchedUser, timestamp: Date.now() };
    res.json(leetcodeCache.data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching LeetCode data' });
  }
});

router.get('/gfg/:username', async (req, res) => {
  const { username } = req.params;
  try {
    // Fetch GFG user profile page and extract embedded JSON stats
    const response = await axios.get(`https://www.geeksforgeeks.org/user/${username}/`, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.5',
      }
    });
    const html = response.data;

    // Extract problem stats from the embedded JSON in the page
    const totalMatch = html.match(/"total_problems_solved"\s*:\s*(\d+)/);
    const easyMatch = html.match(/"easy_problems_solved"\s*:\s*(\d+)/);
    const mediumMatch = html.match(/"medium_problems_solved"\s*:\s*(\d+)/);
    const hardMatch = html.match(/"hard_problems_solved"\s*:\s*(\d+)/);
    const scoreMatch = html.match(/"coding_score"\s*:\s*(\d+)/);
    const streakMatch = html.match(/"pod_solved_longest_streak"\s*:\s*(\d+)/);

    if (totalMatch) {
      res.json({
        solved: parseInt(totalMatch[1]) || 0,
        easy: parseInt(easyMatch?.[1]) || 0,
        medium: parseInt(mediumMatch?.[1]) || 0,
        hard: parseInt(hardMatch?.[1]) || 0,
        score: parseInt(scoreMatch?.[1]) || 0,
        streak: parseInt(streakMatch?.[1]) || 0
      });
    } else {
      res.status(404).json({ message: 'Could not parse GFG data for user: ' + username });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error fetching GFG data', error: error.message });
  }
});

module.exports = router;
