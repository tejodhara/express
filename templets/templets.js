// server creation
const express = require('express');

const app = express();
const PORT = 5000;

// Controller                                   //req, res  - request,response
app.get('/', (req,res)=>{
    res.json("Message")                         // we can use json or send // we use render to navigate to new page
})

// http methods
// add the data
app.post('/path',(req,res)=>{                   

})

// get the data 
app.get('/path',(req,res)=>{

})

// update the data
app.put('/path',(req,res)=>{

})

// update only part of the data
app.patch('/path',(req,res)=>{

})

// delete the data
app.delete('/path',(req,res)=>{

})

app.listen(PORT,()=>{console.log(`Server is listening to port number ${PORT}`);})