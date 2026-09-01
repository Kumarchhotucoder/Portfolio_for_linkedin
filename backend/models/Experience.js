const mongoose = require('mongoose');

const ExperienceSchema = new mongoose.Schema({
  company: { type: String, required: true },
  role: { type: String, required: true },
  location: { type: String },
  startDate: { type: String },
  endDate: { type: String },
  description: [{ type: String }],
}, { timestamps: true });

module.exports = mongoose.model('Experience', ExperienceSchema);
