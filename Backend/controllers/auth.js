// const express = require('express');
// const router = express.Router();
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

// module.exports = router;
