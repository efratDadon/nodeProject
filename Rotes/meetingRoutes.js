const express = require('express');
const router = express.Router();
const { createMeetingController} = require('../controllers/meeting.controller');

const bodyParser = require('body-parser')
const  jsonParser = bodyParser.json();

router.post('/meeting',jsonParser, createMeetingController);


module.exports = router;