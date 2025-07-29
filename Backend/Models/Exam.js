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
    default: 15  
  },
  totalMarks: {
    type: Number,
    required: true
  },
  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course' // Optional
  },
  status: {
    type: String,
    enum: ['Scheduled', 'Ongoing', 'Completed'],
    default: 'Scheduled'
  }
}, { timestamps: true });

module.exports = mongoose.model('Exam', examSchema);
