const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ MongoDB connected');
  } catch (error) {
<<<<<<< HEAD
    console.error('MongoDB connection failed:', error.message);
=======
    console.error('❌ MongoDB connection failed:', error.message);
>>>>>>> 9b66b30808c8647217cbc7e3b9077855199397f3
    process.exit(1);
  }
};

module.exports = connectDB;
