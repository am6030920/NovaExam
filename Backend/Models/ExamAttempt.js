const mongoose = require('mongoose');

const answerSchema = new mongoose.Schema({
  questionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Question',
    required: true
  },
  answer: {
    type: String,
    required: true
  },
  isCorrect: {
    type: Boolean,
    default: false
  },
  obtainedMarks: {
    type: Number,
    default: 0
  },
  evaluated: {
    type: Boolean,
    default: false
  }
});

const examAttemptSchema = new mongoose.Schema({
  examId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Exam',
    required: true
  },
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  startedAt: {
    type: Date,
    default: Date.now
  },
  submittedAt: {
    type: Date
  },
  answers: [answerSchema],
  totalMarksObtained: {
    type: Number,
    default: 0
  },
  status: {
    type: String,
    enum: ['InProgress', 'Submitted', 'Graded'],
    default: 'InProgress'
  }
}, { timestamps: true });

module.exports = mongoose.model('ExamAttempt', examAttemptSchema);
