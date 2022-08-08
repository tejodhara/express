const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fname: {
    type: String,
    minlength: 3,
    maxlength: 20,
    required: true,
  },
  lname: {
    type: String,
    minlength: 1,
    maxlength: 10,
    required: true,
  },
  email: {
    type: String,
    minlength: 7,
    maxlength: 30,
    required: true,
  },
  password: {
    type: String,
    minlength: 8,
    maxlength: 100,
    required: true,
  },
  role:{
      type:String,
      minlength:1,
      maxlength:10,
      required:true
  },
  date:{
      type:Date,
      default:Date.now
  }
});

module.exports= mongoose.model('user',userSchema)
