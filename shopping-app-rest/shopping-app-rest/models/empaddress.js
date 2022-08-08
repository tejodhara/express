const mongoose = require('mongoose')

const addressSchema = new mongoose.Schema(
    {
        drno:String,
        street:String,
        area:String,
        pin:Number,
        empid:
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'employee'
        }
    }
)

module.exports = mongoose.model('address',addressSchema)