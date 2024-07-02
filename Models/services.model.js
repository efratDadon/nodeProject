const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  serviceId: Number,
  price: String,
  description: String,
}, {versionKey: false});

const serviceModel = mongoose.model('Service', serviceSchema);

module.exports = serviceModel;