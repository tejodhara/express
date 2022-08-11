const express = require('express');
const dotenv = require("dotenv");

dotenv.config();
const dbConnect = require("./config/db/dbConnect");
const { userRegisterCtrl } = require('./controllers/users/usersCtrl');

const app = express();
// DB
dbConnect();
// console.log(process);   // 
// console.log(process.env);   // we can see our mongo Db url

// server
const PORT = process.env.PORT || 5000;

// Register         controllers- actions
app.post("/api/users/register", userRegisterCtrl)

// Login
app.post("/api/users/login",(req,res) =>{
    res.json({user: "User Login"})
})

// Fetch all user
app.get("/api/users",(req,res) =>{
    res.json({user: "Fetch all user"})
})


app.listen(PORT, console.log(`Server is running ${PORT}`))