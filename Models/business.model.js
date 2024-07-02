const mongoose = require('mongoose');
const businessSchema = new mongoose.Schema({
  name: String,
  address :String
}, {versionKey: false});

const businessModel = mongoose.model('Busniess', businessSchema);

module.exports = {businessModel};
