const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  price: Number,
  description: String,
}, { versionKey: false });

const serviceModel = mongoose.model('Service', serviceSchema);

module.exports = { serviceModel };