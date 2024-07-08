const express = require('express');
const router = express.Router();
const { createUserController } = require('../controllers/user.controller');

const bodyParser = require('body-parser')
const  jsonParser = bodyParser.json();

router.post('/user',jsonParser, createUserController);

module.exports = router