const { serviceModel } = require('../models/services.model');

//using Template literals
async function createService(price, description) {
  try {
    const doc = new serviceModel({ price, description });
    return await doc.save();
  } catch (error) {
    console.error(`Error creating service: ${error}`);
    throw new Error('Could not create service');
  }
}

async function updateService(id, price, description) {
  try {
    const service = await serviceModel.findByIdAndUpdate(id, { price, description }, { new: true });
    if (!service) {
      throw new Error(`Service with ID ${id} not found`);
    }
    return service;
  } catch (error) {
    console.error(`Error updating service with ID ${id}: ${error}`);
    throw new Error('Could not update service');
  }
}

async function deleteService(id) {
  try {
    const result = await serviceModel.findByIdAndDelete(id);
    if (!result) {
      throw new Error(`Service with ID ${id} not found`);
    }
    return result;
  } catch (error) {
    console.error(`Error deleting service with ID ${id}: ${error}`);
    throw new Error('Could not delete service');
  }
}

// Exporting using arrow functions
module.exports = {
  createService: (price, description) => createService(price, description),
  updateService: (id, price, description) => updateService(id, price, description),
  deleteService: (id) => deleteService(id)
};
