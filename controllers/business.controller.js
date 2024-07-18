const  BusinessService = require('../services/business.service') ;

 const createBusinessController = async (req, res) => {
  try {
    const { name, address } = req.body;
    const business = await BusinessService.createBusiness(name, address);
    res.json({
      message: 'success',
      data: business,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

 const updateBusinessController = async (req, res) => {
  try {
    const { name, address } = req.body;
    const { id } = req.params;
    const business = await BusinessService.updateBusiness(id, name, address);
    res.json({
      message: 'success',
      data: business,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


module.exports = {
  createBusinessController,
  updateBusinessController
}


