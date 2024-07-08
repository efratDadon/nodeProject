const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  // _Id: Number,
  name: String,
  adress: String,
  password: String,
  email: String,
}, {versionKey: false});

const userModel = mongoose.model('User', userSchema);

module.exports = {userModel};