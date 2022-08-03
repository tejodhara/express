const express = require("express");
const router = express.Router();
const product = require("../models/product.js");        // imprt the schema

// controller to add product
router.get("/addproduct", (req, res) => {
  res.render("./addproduct.handlebars");
});

// creting endpoint for monolathic appliacation
router.post("/product/add", async (req, res) => {
  console.log(req.body);
  let { pName, pDesc, pPrice } = req.body;    // destructuring // this data is received from front end
  try {
    await product.insertMany({ pName, pDesc, pPrice });         // here we need to give the schema   
    // res.redirect('/products/products')
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;