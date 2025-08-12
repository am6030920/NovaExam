const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
  name: { type: String, required: true },
  feedback: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const feedback = mongoose.model('Feedback', feedbackSchema);
module.exports = feedback;
