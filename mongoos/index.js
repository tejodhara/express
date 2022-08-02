const express = require('express')
const mongoose = require('mongoose')

// connect method DB url, keys

mongoose
    .connect('mongodb://localhost:27017/demo',{})               // to connect to the database
    .then(()=>{
        console.log(`Database is connected Sucssesfully`);
    })
    .catch((err)=>{
        console.log(err);
    })

// in schema we need to give keys and datatype 
let person= mongoose.Schema({
                name: String,
                address: {
                    city:String,
                    street: String,
                    pin: Number,
                },
                phoneNumber: Number,
                date:{
                    type: Date,
                    default: Date.now()     // date will give current date
                }
            });

// model is a class
const Employee = new mongoose.model('employee',person)         // it takes two arguments is collection name and Schema

// insert data in colleciton
const person1 = new Employee({
    name:'Teja',
    addrss: {
        city:'bangalore',
        street:'BTM',
        pin:563130,
    },
    phoneNumber:8247802033,
    date: new Date()
})
person1.save();         // it will save the data in the compass