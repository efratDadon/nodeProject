const mongoose = require('mongoose');
// const userModel = require('./user.model');

const meetingSchema = new mongoose.Schema({
  // _id: {type:mongoose.Schema.Types.ObjectId},
  date: String,
  startTime: String,
  duration: Number,
  location: String,
  serviceId: {type:mongoose.Schema.Types.ObjectId,ref:'Service'}
}, {versionKey: false});

const meetModel = mongoose.model('Meeting', meetingSchema);

module.exports = {meetModel};

