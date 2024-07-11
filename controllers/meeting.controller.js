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

const updateMeetingController = async (req, res) => {
  try {
    const {  date, startTime, duration, location } = req.body;
    const { id } = req.params;
    const meeting = await meetingService.updateMeeting(id,  date, startTime, duration, location);
    res.json({
      message: 'success',
      data: meeting,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteMeetingController = async (req, res) => {
  try {
    const { id } = req.params;
    const meeting = await meetingService.deleteMeeting(id);
    if(meeting){
      res.json({
        message: 'success',
      });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
    createMeetingController,
    updateMeetingController,
    deleteMeetingController
  }