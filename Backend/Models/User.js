const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
<<<<<<< HEAD
  name: { type: String, required: true },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    match: [/^\S+@\S+\.\S+$/, 'Invalid email format']
  },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
=======
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  password: { type: String, required: true },
>>>>>>> 9b66b30808c8647217cbc7e3b9077855199397f3
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
