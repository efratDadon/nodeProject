const mongoose = require('mongoose');
const bcrypt = require('bcrypt'); 
const connectDB = require('../dataBase'); 
const { userModel } = require('../models/user.model');
const { updateMeeting } = require('../services/meeting.service');
const { signUp, signIn } = require('../services/login.service');


beforeAll(async () => {
    await connectDB();
});

afterAll(async () => {
    await mongoose.connection.close();
    server.close();
  });  

afterEach(async () => {
    await userModel.deleteMany({});
});

// Test for updating a meeting that does not exist
describe('Meeting Service', () => {
    it('should throw an error when updating a non-existing meeting', async () => {
        const Id = mongoose.Types.ObjectId();
        await expect(updateMeeting(Id, '2024-07-14', '09:00', 60, 'Office 101')).rejects.toThrow('meeting not found');
    });
});

//Checking for user registration with an email that already exists in the database
describe('User Service', () => {
    it('should not create a new user if email already exists', async () => {
        const existingUser = {
            name: 'yael',
            address: 'begin 11',
            password: 'yael456',
            email: 'user@gmail.com'
        };

        await new userModel(existingUser).save();

        const newUser = {
            name: 'efrat',
            address: 'St 123',
            password: 'efrat123',
            email: 'user@gmail.com' 
        };

        await expect(signUp(newUser.name, newUser.address, newUser.password, newUser.email)).rejects.toThrow('User validation failed: email: Email already exists');
    });
});

// Test for successful user sign-in
describe('Authentication Service', () => {
    it('should authenticate a user successfully', async () => {
        const existingUser = {
            name: 'yael',
            address: 'begin 11',
            password: await bcrypt.hash('yael456', 10), 
            email: 'user@gmail.com'
        };

        await new userModel(existingUser).save();

        const { token } = await signIn(existingUser.name, 'yael456'); 
        expect(token).toBeDefined();
    });
});
