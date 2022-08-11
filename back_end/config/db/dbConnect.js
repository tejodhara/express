const mongoose = require('mongoose')

const dbConnect = async() =>{
    try {
        await mongoose.connect(
            // connection string using env variable
            process.env.MONGODB_URL,{
            // useCreateIndex: true,                   // configeration options
            // useFindAndModify: false,                 // in latest versions usecreateindex, usefindandmodify are not supported
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });
        console.log('DB is connected successfully');
    }catch(error){
        console.log(`Error ${error.message}`);
    }
}

module.exports = dbConnect;