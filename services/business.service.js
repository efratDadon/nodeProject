const { businessModel } = require('../Models/business.model');;

const createBusiness = async (name, address) => {
  try {
    // const businessId = uuidv4();

    const doc = new businessModel({ name, address });
    // const result = await businessModel.insertOne(doc);

    // const business = new Business({ name, address });
    // await business.save();
    return await doc.save();
  } catch (error) {
    console.error('Error creating business:', error);
    throw new Error('Could not create business');
  }
};

const updateBusiness = async (id, name, address) => {
  try {
    const business = await businessModel.findByIdAndUpdate(id, { name, address }, { new: true });
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