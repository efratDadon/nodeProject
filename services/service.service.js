const {  serviceModel } = require('../Models/services.model');

const createService = async (price, description) => {
  try {

    const doc = new serviceModel({ price, description });
    return await doc.save();
  } catch (error) {
    console.error('Error creating service:', error);
    throw new Error('Could not create service');
  }
};

const updateService = async (id, price, description) => {
  try {
    const service = await serviceModel.findByIdAndUpdate(id, { price, description }, { new: true });
    if (!service) {
      throw new Error('service not found');
    }
    return service;
  } catch (error) {
    console.error('Error updating service:', error);
    throw new Error('Could not update service');
  }
};

const deleteService = async (id) => {
  try {

    return await serviceModel.findByIdAndDelete(id);
  } catch (error) {
    console.error('"Cant delete Service":', error);
    throw new Error('Could not delete service');
  }
};

module.exports = {
    createService,
    updateService,
    deleteService
}