const  mongoose = require("mongoose")
const dburl = process.env.DB;               // process is build in object


mongoose
    .connect(dburl, {useNewUrlParser:true, useUnifiedTopology:true})
    .then(()=>{
    console.log(`db connected successfully`);
    })
    .catch((err)=>{
        console.log(err);
    })
