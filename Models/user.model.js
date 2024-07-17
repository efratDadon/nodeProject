const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  adress: String,
  password: String,
  email: String,
}, {versionKey: false});

const userModel = mongoose.model('User', userSchema);

module.exports = {userModel};