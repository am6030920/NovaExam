const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  passwordHash: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['Admin', 'Instructor', 'Student'],
    default: 'Student'
  },
  enrolledCourses: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course' // or whatever your course model is called
  }]
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
