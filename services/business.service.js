const Business = require('../Models/business.model');;

 const createBusiness = async (name, address) => {
  try {
    const businessId = uuidv4();
    const business = new Business({businessId, name, address });
    await business.save();
    return business;
  } catch (error) {
    console.error('Error creating business:', error);
    throw new Error('Could not create business');
  }
};

 const updateBusiness = async (id, name, address) => {
  try {
    const business = await Business.findByIdAndUpdate(id, { name, address }, { new: true });
    if (!business) {
      throw new Error('Business not found');
    }
    return business;
  } catch (error) {
    console.error('Error updating business:', error);
    throw new Error('Could not update business');
  }
};

module.exports = {
  createBusiness,
  updateBusiness
}