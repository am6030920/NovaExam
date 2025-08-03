const express = require('express');
const router = express.Router();

// POST /api/auth/signup
router.post('/signup', (req, res) => {
  const { name, email, password } = req.body;
  // Save user to DB logic here (mock for now)
  res.status(200).json({ message: 'Signup successful!' });
});

// POST /api/auth/login
router.post('/login', (req, res) => {
  const { email, password } = req.body;
  // Authentication logic here (mock for now)
  res.status(200).json({ message: 'Login successful!' });
});

module.exports = router;
