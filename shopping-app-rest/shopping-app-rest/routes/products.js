const express = require("express");

const productRoute = express.Router();
const productController = require('../controllers/products.js')
const Authonticate = require('../middlewares/auth.js')

productRoute.get("/products",Authonticate.authorizeUserAndAdmin, productController.getProducts);
productRoute.post("/add-products",Authonticate.authorizeAdmin,productController.addProducts)
productRoute.put("/edit-products",Authonticate.authorizeAdmin,productController.editProducts)
productRoute.delete("/delete-products",Authonticate.authorizeAdmin,productController.deleteProducts)

module.exports = productRoute;
 