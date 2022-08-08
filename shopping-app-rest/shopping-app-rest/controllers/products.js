const productModel = require("../models/products.js");

const getProducts = async (req, res, next) => {
  try {
    const data = await productModel.find().lean();
    res.status(200).json({
      error: false,
      message: "Products getting succussfull",
      data: data,
    });
  } catch (err) {
    next(err);
  }
};

const addProducts = async (req, res, next) => {
  console.log(req.body);
  try {
    const { pName, pDesc, pPrice } = req.body;
    await productModel.insertMany({
      pName,
      pDesc,
      pPrice,
    });
    res.status(200).json({
      error: false,
      message: "Product Added Successufully",
      data: {
        pName,
        pDesc,
        pPrice,
      },
    });
  } catch (err) {
    next(err);
  }
};

const editProducts = async (req, res, next) => {
  console.log(req.body); //We need to use req.query to get the params
  try {
    const { _id, pName, pDesc, pPrice } = req.body;

    await productModel.updateOne(
      {
        _id,
      },
      {
        $set: {
          pName,
          pDesc,
          pPrice,
        },
      }
    );
    res.status(200).json({
      error: false,
      message: "Product updated successfull",
      data: {
        pName,
        pDesc,
        pPrice,
      },
    });
  } catch (err) {
    next(err);
  }
};

const deleteProducts = async (req, res, next) => {
  console.log(req.query);
  try {
    const _id = req.query._id;

    await productModel.deleteOne({ _id });
    res.status(200).json({
      error: false,
      message: "Product deleted Successfully",
      data: null,
    });
  } catch (err) {
    next(err);
  }
};
module.exports = {
  getProducts,
  addProducts,
  editProducts,
  deleteProducts,
};
