const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
<<<<<<< HEAD:Backend/db.js
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
=======
    await mongoose.connect(process.env.MONGO_URI); 
    console.log('MongoDB connected successfully');
>>>>>>> 910bb40b6a29a9289947db6eddeaf847e347dd24:Backend/config/db.js
  } catch (err) {
    console.error('MongoDB connection failed:', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
