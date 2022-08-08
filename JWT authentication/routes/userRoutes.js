// routing part for login registration
const express = require('express')
const userRoute = express.Router()
const userController = require('../controllers/userContorller')

// create the route
userRoute.post('/register',userController.registration)
userRoute.post('/login',userController.loginPage)

module.exports = userRoute;