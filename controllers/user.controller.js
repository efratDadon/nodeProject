const  userService = require('../services/user.service') ;


const createUserController = async (req, res) => {
    try {
      const {name, adress, password, email} = req.body;
      const newUser = await userService.createUser(name, adress, password, email);
      res.json({
        message: 'success',
        data: newUser,
      });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  module.exports = {
    createUserController
}