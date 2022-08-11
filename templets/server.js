// server creation
const express = require('express');

const app = express();
const PORT = 5000;

// Controller 
app.get('/', (req,res)=>{
    res.json("Message")                         
})

app.listen(PORT,()=>{console.log(`Server is listening to port number ${PORT}`);})