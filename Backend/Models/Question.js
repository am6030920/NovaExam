const mongoose = require('mongoose');

const examSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  instructorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  startTime: {
    type: Date,
    required: true
  },
  endTime: {
    type: Date,
    required: true
  },
  durationMins: {
    type: Number,
    default: 30 // your default exam duration (e.g., 30 minutes)
  },
  totalMarks: {
    type: Number,
    required: true
  },
  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course' // optional if you use course-wise exams
  },
  status: {
    type: String,
    enum: ['Scheduled', 'Ongoing', 'Completed'],
    default: 'Scheduled'
  },
  questionSetKey: {
    type: String,
    required: true,
    enum: [
      'Java', 'C', 'Cpp', 'Python',
      'GK', 'ML', 'Practice'
    ]
    // This links to the static question type (based on page)
  }
}, { timestamps: true });

module.exports = mongoose.model('Exam', examSchema);
