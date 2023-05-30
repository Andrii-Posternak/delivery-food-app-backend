const Food = require("../models/food");

const getFoods = async (req, res, next) => {
  try {
    const products = await Food.find();
    console.log("products==>", products);
    res.json(products);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getFoods,
};
