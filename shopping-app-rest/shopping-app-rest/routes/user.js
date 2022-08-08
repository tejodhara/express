const express = require('express')
const userController = require('../controllers/user.js')
const router = express.Router()
// router.use(express.urlencoded({extended:true}))
router.post('/register',userController.userRegister)
router.post('/login',userController.userLogin)


module.exports = router