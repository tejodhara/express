const express = require('express')
const logger = require('./config/logger.js')
//Dotenv is the library for getting the data from .env file
require('dotenv').config()

const cors = require('cors')


require('./config/db.js')
const userRoute = require('./routes/user.js')
const productRoute = require('./routes/products.js')
const app = express()

//Cors Midlleware
app.use(cors())

//Body parser middleware
app.use(express.urlencoded({extended:true}))



//JSOn Middleware
app.use(express.json())

//Router Middleware
app.use('/user',userRoute)
app.use('/products',productRoute)
app.use('/employees',require('./routes/employees.js'))




app.get('/test',(req,res,next)=>{
    res.json({
        message:'Test is working',
        data:null
    })
})



//error handling middleware
app.use((err,req,res,next)=>{
    res.status(500).json({
        error:true,
        message:err.message,
        data:null
    })
    logger.log(err.message)
})


module.exports = app