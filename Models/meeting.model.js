const mongoose = require('mongoose');
// const userModel = require('./user.model');

const meetingSchema = new mongoose.Schema({
  meetingId: Number,
  userId: String,
  date: String,
  startTime: String,
  duration: Number,
  location: String,
}, {versionKey: false});

const meetModel = mongoose.model('Meeting', meetingSchema);

module.exports = meetModel;