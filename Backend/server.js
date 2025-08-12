const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./db');
const authRoutes = require('./routes/auth');
const feedbackRoutes = require('./routes/feedback');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

<<<<<<< HEAD
// Routes
=======
// Connect to MongoDB
connectDB();

// Auth routes
>>>>>>> 9b66b30808c8647217cbc7e3b9077855199397f3
app.use('/api/auth', authRoutes);
app.use('/api/feedback', feedbackRoutes);  // feedback routes

// Start server
<<<<<<< HEAD
=======
const PORT = process.env.PORT || 5000;
>>>>>>> 9b66b30808c8647217cbc7e3b9077855199397f3
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
