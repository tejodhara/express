const express = require('express')
const router = express.Router()
const productController = require('../controllers/contollerProduct')

router.post('/add-product',productController.addProduct)
router.get('/get-product',productController.getProduct)
router.put('/edit-product/:_id',productController.editProdcut)
router.delete('/delete-product/:_id',productController.deleteProdcut)

module.exports = router