const express = require('express')
require('dotenv').config()
require('./config/db')
const app = express()
const PORT = 3010
const productRouter =require('./routes/routeProduct')
const userRoute = require('./routes/userRoutes')

// body parser middleware
app.use(express.urlencoded({extended:true}))

// json middleware      // it will conver json to object
app.use(express.json())
app.use('/api',productRouter)
app.use('/auth', userRoute)

app.listen(PORT,console.log(`Server is listen to port number ${PORT}`))