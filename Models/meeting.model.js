const mongoose = require('mongoose');

const meetingSchema = new mongoose.Schema({
  date: String,
  startTime: String,
  duration: Number,
  location: String,
  serviceId: {type:mongoose.Schema.Types.ObjectId,ref:'Service'}
}, {versionKey: false});

const meetModel = mongoose.model('Meeting', meetingSchema);

module.exports = {meetModel};

