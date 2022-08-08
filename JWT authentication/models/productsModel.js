const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    pName: {
        type: String,
        minlength:1,
        maxlenght:20,
        required: true,
    },
    pDesc: {
        type: String,
        minlength:1,
        maxlenght:200,
        required: true,
    },
    pPrice: {
        type: Number,
        minlength:1,
        maxlenght:100000,
        required: true,
    }
})
module.exports = mongoose.model('product',productSchema)