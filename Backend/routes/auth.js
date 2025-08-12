<<<<<<< HEAD
const express = require('express');  // ***Missing import, add this***
=======
const express = require('express');
>>>>>>> 9b66b30808c8647217cbc7e3b9077855199397f3
const router = express.Router();
const User = require('../Models/User'); // Capital U here
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const JWT_SECRET = process.env.JWT_SECRET || 'yourSecretKey';

<<<<<<< HEAD
// Helper: Password validation regex (exactly 8 chars, 1 uppercase, 1 digit, 1 special char)
const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8}$/;

// ====== Signup Route ======
router.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Basic validation
    if (!name || !email || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    if (!email.endsWith('@gmail.com')) {
      return res.status(400).json({ message: 'Email must be @gmail.com' });
    }

    if (!passwordRegex.test(password)) {
      return res.status(400).json({
        message: 'Password must be exactly 8 characters, contain 1 uppercase letter, 1 number, and 1 special character',
      });
    }

    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: 'User already exists' });
=======
// Signup route
router.post('/signup', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password)
      return res.status(400).json({ error: 'All fields are required' });

    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(409).json({ error: 'User already exists' });

    // Password validation example (optional)
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    if (!passwordRegex.test(password)) {
      return res.status(400).json({
        error: 'Password must be at least 8 characters long, include 1 uppercase letter, 1 number, and 1 special character.',
      });
>>>>>>> 9b66b30808c8647217cbc7e3b9077855199397f3
    }

    const hashedPassword = await bcrypt.hash(password, 10);

<<<<<<< HEAD
    // Create user
    const user = new User({ name, email, password: hashedPassword });
=======
    const user = new User({
      name,
      email,
      password: hashedPassword,
    });

>>>>>>> 9b66b30808c8647217cbc7e3b9077855199397f3
    await user.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    console.error('Signup error:', err.message);
    res.status(500).json({ message: 'Server error during signup' });
  }
});

<<<<<<< HEAD
// ====== Login Route ======
=======
// Login route
>>>>>>> 9b66b30808c8647217cbc7e3b9077855199397f3
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

<<<<<<< HEAD
  try {
    //  Basic validation
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      JWT_SECRET,
      { expiresIn: '7d' }
    );

=======
    if (!email || !password)
      return res.status(400).json({ error: 'Email and password are required' });

    const user = await User.findOne({ email });
    if (!user)
      return res.status(401).json({ error: 'Invalid email or password' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(401).json({ error: 'Invalid email or password' });

    const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '2h' });

>>>>>>> 9b66b30808c8647217cbc7e3b9077855199397f3
    res.status(200).json({
      message: 'Login successful',
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (err) {
<<<<<<< HEAD
    console.error('Login error:', err.message);
    res.status(500).json({ message: 'Server error during login' });
=======
    console.error('Login error:', err);
    res.status(500).json({ error: 'Server error during login' });
>>>>>>> 9b66b30808c8647217cbc7e3b9077855199397f3
  }
});

module.exports = router;
