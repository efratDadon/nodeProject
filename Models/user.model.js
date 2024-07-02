const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  userId: Number,
  name: String,
  adress: String,
  password: String,
  email: String,
}, {versionKey: false});

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;