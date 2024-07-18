const { meetModel } = require('../models/meeting.model');

const createMeeting = async (date, startTime, duration, location, serviceId) => {
    try {
        const existingMeet = await meetModel.findOne({ startTime, date });
        if (existingMeet) {
            throw new Error('Please choose another time.');
        }
        const doc = new meetModel({ date, startTime, duration, location, serviceId });
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
        throw new Error(error.message);
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
    deleteMeeting
};
