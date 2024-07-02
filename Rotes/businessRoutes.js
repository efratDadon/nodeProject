const express = require('express');
const router = express.Router();
const { createBusinessController, updateBusinessController } = require('../controllers/business.controller');

router.post('/businesses', createBusinessController);
router.put('/businesses/:id', updateBusinessController);

module.exports = router;

