const mongoose = require('mongoose')

const Scheema = mongoose.Schema({
    pName :{
        type: String,
        require: true,
        maxLength:10
    },
    pDesc: {
        type: String,
        require: true,
    },
    pPrice:{
        type: Number,
        require: true,
    }
})

module.exports = mongoose.model('productCollcection',Scheema);