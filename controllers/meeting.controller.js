const  meetingService = require('../services/meeting.service') ;
const mongoose = require('mongoose');
const { Schema } = mongoose;

 const createMeetingController = async (req, res) => {
  try {
    const {date,startTime,duration,location, serviceId} = req.body;
    const meeting = await meetingService.createMeeting(date,startTime,duration,location, serviceId);
    res.json({
      message: 'success',
      data: meeting,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
    createMeetingController

  }