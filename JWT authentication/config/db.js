// create connection from express to mongoDB
const dburl = process.env.DB;
const mongoose = require('mongoose')

mongoose
    .connect(dburl,{useNewUrlParser:true, useUnifiedTopology:true})
    .then(()=>{
        console.log('db connected successfully');
    })
    .catch((err)=>{
        console.log(err);
    });
