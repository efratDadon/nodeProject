const express = require('express');
const router = express.Router();
const { signInController, signUpController} = require('../controllers/login.controller');
const bodyParser = require('body-parser')
router.use(bodyParser.json());





router.post('/signIn', signInController);


router.post('/signUp', signUpController);


module.exports = router;