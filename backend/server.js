const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const statsRoutes = require('./routes/stats');
const portfolioRoutes = require('./routes/portfolio');
const contactRoutes = require('./routes/contact');

app.use('/api/stats', statsRoutes);
app.use('/api/portfolio', portfolioRoutes);
app.use('/api/contact', contactRoutes);

// Database Connection (Fallback to local if no URI)
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/3dportfolio';
mongoose.connect(MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Basic route
app.get('/', (req, res) => {
  res.send('API is running');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
