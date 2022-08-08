const mongoose = require('mongoose')

const employeeShema = new mongoose.Schema(
    {
        ename:String,
        salary:Number,
        gender:String,
        address:[
            {
                type:mongoose.Schema.Types.ObjectId,
                ref:'address'
            }
        ]
    }
)

module.exports = mongoose.model('employee',employeeShema)