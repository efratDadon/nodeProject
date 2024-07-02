const mongoose = require('mongoose');

const businessSchema = new mongoose.Schema({
  businessId: String,
  name: String,
  adress :String
}, {versionKey: false});

const businessModel = mongoose.model('Busniess', businessSchema);

module.exports = businessModel;
