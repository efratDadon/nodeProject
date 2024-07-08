const loginService = require('../services/login.service');

const signUpController = async (req, res) => {
    try {
        const {name, address, password, email} = req.body;
        const user = await loginService.signUp(name, address, password, email);
        res.status(201).json(user);
    } catch (error) {
        console.error(error);
        res.status(400).send("User wasn't able to be created");
    }
};

const signInController = async (req, res) => {
    try {
        const { userName, password } = req.body;
        const token = await loginService.signIn(userName, password);
        res.status(200).json(token);
    } catch (error) {
        console.error(error);
        res.status(400).send("User wasn't found");
    }
};

module.exports = {
    signUpController,
    signInController
};
