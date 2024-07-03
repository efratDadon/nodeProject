const express = require('express');
const router = express.Router();
const { createServiceController, updateServiceController, deleteServiceController } = require('../controllers/service.controller');

const bodyParser = require('body-parser')
const  jsonParser = bodyParser.json();

router.post('/services',jsonParser, createServiceController);
router.put('/services/:id', jsonParser,updateServiceController);
router.delete('/services/:id', jsonParser,deleteServiceController);


module.exports = router;