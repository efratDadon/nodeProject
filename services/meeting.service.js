const {meetModel} =require('../Models/meeting.model');

const createMeeting=async (date,startTime,duration,location, serviceId)=>{
    try {
    
    const doc = new meetModel({date,startTime,duration,location, serviceId });
    const existingMeet = await meetModel.findOne({ startTime: startTime, date: date});
    if (existingMeet) {
      return res.status(400).send('Please choose another time.');
    }
    return await doc.save();
  } catch (error) {
    console.error('Error creating meeting:', error);
    throw new Error('Could not create meeting');
  }
};

const updateMeeting = async (id, date, startTime, duration, location) => {
  try {
    const meeting = await meetModel.findByIdAndUpdate(id, { date, startTime, duration, location }, { new: true });
    if (!meeting) {
      throw new Error('meeting not found');
    }
    return meeting;
  } catch (error) {
    console.error('Error updating meeting:', error);
    throw new Error('Could not update meeting');
  }
};

const deleteMeeting = async (id) => {
  try {

    return await meetModel.findByIdAndDelete(id);
  } catch (error) {
    console.error('"Cant delete Meeting":', error);
    throw new Error('Could not delete Meeting');
  }
};


module.exports = {
  createMeeting,
  updateMeeting,
  deleteMeeting}

