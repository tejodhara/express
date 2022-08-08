const mongoose = require('mongoose')

const departmentSchema= new mongoose.Schema(
    {
        depname:String,
        depno:Number,
        empid:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'employee'
        }
    }
)

module.exports = mongoose.model('department',departmentSchema)