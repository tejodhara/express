const express = require('express')
const mongoose = require('mongoose')

// connect method DB url, keys

mongoose.connect('mongodb://localhost:27017/demo',{})
    .then(()=>{
        console.log(`Database is connected Sucssesfully`);
    })
    .catch((err)=>{
        console.log(err);
    })












// const app = express()
// const port = 3007

// app.listen(port,console.log(`Server is listening to port ${port}`))