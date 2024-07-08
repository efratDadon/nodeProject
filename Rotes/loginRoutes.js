const express = require('express');
const router = express.Router();
const { signInController, signUpController} = require('../controllers/login.controller');

const bodyParser = require('body-parser')
const  jsonParser = bodyParser.json();

router.post('/signIn',jsonParser, signInController);
router.post('/signUp',jsonParser, signUpController);


module.exports = router;