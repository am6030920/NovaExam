// const express = require('express');
// const router = express.Router();
<<<<<<< HEAD
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const User = require('../models/User');

// // Email validator
// const isValidEmail = (email) => {
//   return /^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(email);
// };

// // Password validator
// const isValidPassword = (password) => {
//   return /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{9,}$/.test(password);
// };

// // ==== SIGNUP ====
// router.post('/signup', async (req, res) => {
//   const { name, email, password } = req.body;

//   // Input validations
//   if (!name || name.trim() === '') {
//     return res.status(400).json({ msg: 'Name is required' });
//   }

//   if (!isValidEmail(email)) {
//     return res.status(400).json({ msg: 'Email must end with @gmail.com' });
//   }

//   if (!isValidPassword(password)) {
//     return res.status(400).json({
//       msg: 'Password must be at least 9 characters, include 1 uppercase letter, 1 number, and 1 special character',
//     });
//   }

//   try {
//     const userExist = await User.findOne({ email });
//     if (userExist) return res.status(400).json({ msg: 'User already exists' });

//     const hashedPassword = await bcrypt.hash(password, 10);
//     const newUser = new User({ name, email, password: hashedPassword });
//     await newUser.save();

//     res.status(201).json({ msg: 'Signup successful' });
//   } catch (err) {
//     res.status(500).json({ msg: 'Server error during signup' });
//   }
// });

// // ==== LOGIN ====
// router.post('/login', async (req, res) => {
//   const { email, password } = req.body;

//   // Input validations
//   if (!isValidEmail(email)) {
//     return res.status(400).json({ msg: 'Invalid email. Must end with @gmail.com' });
//   }

//   if (!password || password.length < 9) {
//     return res.status(400).json({ msg: 'Invalid password format' });
//   }

//   try {
//     const user = await User.findOne({ email });
//     if (!user) return res.status(400).json({ msg: 'Email not registered' });

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) return res.status(400).json({ msg: 'Incorrect password' });

//     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
//       expiresIn: '7d',
//     });

//     res.status(200).json({
//       msg: 'Login successful',
//       token,
//       user: {
//         id: user._id,
//         name: user.name,
//         email: user.email,
//       },
//     });
//   } catch (err) {
//     res.status(500).json({ msg: 'Server error during login' });
//   }
// });

=======
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const User = require('../models/User');
// require('dotenv').config();

// router.post('/signup', async (req, res) => {
//   const { name, email, password } = req.body;

//   try {
//     const existingUser = await User.findOne({ email });
//     if (existingUser)
//       return res.status(400).json({ message: 'User already exists' });
//     if (!email.endsWith('@gmail.com')) {
//       return res.status(400).json({ message: 'Email must be @gmail.com' });
//     }
//     const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8}$/;
//     if (!passwordRegex.test(password)) {
//       return res.status(400).json({
//         message: 'Password must be exactly 8 characters long, contain 1 uppercase letter, 1 number, and 1 special character'
//       });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);


//     const user = new User({ name, email, password: hashedPassword });
//     await user.save();

//     res.status(201).json({ message: 'User created successfully' });
//   } catch (err) {
//     console.error('Signup error:', err.message);
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// router.post('/login', async (req, res) => {
//   const { email, password } = req.body;

//   try {

//     const user = await User.findOne({ email });
//     if (!user)
//       return res.status(400).json({ message: 'Invalid credentials' });

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch)
//       return res.status(400).json({ message: 'Invalid credentials' });
//     const token = jwt.sign(
//       { userId: user._id, email: user.email },
//       process.env.JWT_SECRET,
//       { expiresIn: '7d' } // login valid for 7 days
//     );

//     res.status(200).json({
//       message: 'Login successful',
//       token,
//       user: {
//         name: user.name,
//         email: user.email
//       }
//     });
//   } catch (err) {
//     console.error('Login error:', err.message);
//     res.status(500).json({ message: 'Server error' });
//   }
// });

>>>>>>> 910bb40b6a29a9289947db6eddeaf847e347dd24
// module.exports = router;
