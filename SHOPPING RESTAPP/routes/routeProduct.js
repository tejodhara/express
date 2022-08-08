const express =require('express')
const router = express.Router()
const productController = require('../controllers/controllerProduct')

router.post('/add-product',productController.addProduct)
router.get('/getProduct',productController.getProduct)
router.put('/edit-product/:_id',productController.editProduct)
router.delete('/deleteProduct/:_id',productController.deleteProduct)

module.exports = router