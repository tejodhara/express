const express = require('express')
const app = express()
const path = require('path')

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'public/about.html'))
})
app.get('/home',(req,res)=>{
    res.sendFile(path.join(__dirname,'public/home.html'))
})

app.listen(3001,()=>{
    console.log('server is listen to port no 3001');
})