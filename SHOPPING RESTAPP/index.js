const express = require('express')
const app = express()
const PORT = 3009
// require('dotenv').config({path: './config/db'});     // we can give this way or the below way
require('dotenv').config();
require('./config/db');
const productRouter = require('./routes/routeProduct')

app.use(express.urlencoded({extended: true}))

// json middleware
app.use(express.json())
app.use('/api',productRouter)

app.listen(PORT,console.log(`The app is listering to port number ${PORT}`))