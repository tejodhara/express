const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  pName: {
    type: String,
    require: true,
  },
  pDesc: {
    type: String,
    require: true,
  },
  pPrice: {
    type: Number,
    require: true,
  },
});

const colleciton = mongoose.model("products", productSchema);
module.exports = colleciton;
