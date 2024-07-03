const  serviceService = require('../services/service.service') ;
const mongoose = require('mongoose');
const { Schema } = mongoose;

 const createServiceController = async (req, res) => {
  try {

    const { price, description } = req.body;
    const service = await serviceService.createService(price, description);
    res.json({
      message: 'success',
      data: service,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

 const updateServiceController = async (req, res) => {
  try {
    const { price, description } = req.body;
    const { id } = req.params;
    const service = await serviceService.updateService(id, price, description);
    res.json({
      message: 'success',
      data: service,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteServiceController = async (req, res) => {
  try {
    const { id } = req.params;
    const service = await serviceService.deleteService(id);
    if(service){
      res.json({
        message: 'success',
      });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


module.exports = {
    createServiceController,
    updateServiceController,
    deleteServiceController
}