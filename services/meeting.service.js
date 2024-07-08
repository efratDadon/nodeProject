const {meetModel} =require('../Models/meeting.model');

const createMeeting=async (date,startTime,duration,location, serviceId)=>{
    try {
    
        const doc = new meetModel({date,startTime,duration,location, serviceId });
    return await doc.save();
  } catch (error) {
    console.error('Error creating meeting:', error);
    throw new Error('Could not create meeting');
  }
};


module.exports = {createMeeting}

