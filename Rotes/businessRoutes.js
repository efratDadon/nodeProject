const express = require('express');
const router = express.Router();
const { createBusinessController, updateBusinessController } = require('../controllers/business.controller');

const bodyParser = require('body-parser')
const  jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({ extended: false })

router.post('/businesses',jsonParser, createBusinessController);
router.put('/businesses/:id', jsonParser,updateBusinessController);

module.exports = router;

