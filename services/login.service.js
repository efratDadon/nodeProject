const bcrypt = require('bcrypt');
const { userModel } = require('../models/user.model');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const getUsersFromDatabase = async () => {
    try {
        const users = await userModel.find();
        return users;
    } catch (err) {
        console.error(err);
        throw err;
    }
};

const signUp = async (name, address, password, email) => {
    try {
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
          throw new Error('User validation failed: email: Email already exists');
        }

        const newUser = {
            name,
            address,
            password,
            email
        };
        const hashPassword = await bcrypt.hash(newUser.password, 10);
        newUser.password = hashPassword;
        const user = new userModel(newUser);
        return await user.save();
    } catch (err) {
        console.error(err);
        throw err;
    }
};

const signIn = async (userName, password) => {
    try {
        const users = await getUsersFromDatabase();
        let findUser = null;

        for (const user of users) {
            const isMatch = await bcrypt.compare(password, user.password);
            if (user.name === userName && isMatch) {
                findUser = user;
                break;
            }
        }

        if (!findUser) {
            throw new Error("User wasn't found");
        }

        console.log("User from DB:", findUser);
        const message = `Hello ${findUser.name}! Welcome!!!`;
        console.log(message); 
        
        const options = { expiresIn: '1h' };
        const token = jwt.sign({ id: findUser._id, name: findUser.name, password: findUser.password }, process.env.SECRET_KEY, options);

         return { token, userId: findUser._id };
    } catch (err) {
        console.error(err);
        throw err;
    }
};


module.exports = {
    signUp,
    signIn
};
