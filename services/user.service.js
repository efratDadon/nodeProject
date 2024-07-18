const { userModel } = require('../models/user.model') 
const { createToken } = require('../middlewares/authMiddleware');



const createUser = async (name, adress, password, email) => {

    try {
        const newUser = new userModel({ name, adress, password, email});
        const token = createToken(newUser.id)
        console.log(token)
        return await newUser.save();
      } catch (error) {
        console.error('Error creating user:', error);
        throw new Error('Could not create user');
      }
};

module.exports = {createUser}

