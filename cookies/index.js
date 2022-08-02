let express = require('express')
let app= express()
let port = 3006

const cookieParser = require('cookie-parser')
const {cookie}= require('express/lib/response')

app.use(cookieParser())         // reading a cookie from client side, we use cookie parser
// Cookie cration      cookie key and object
app.get('/cookie-created',(req,res)=>{
    res.cookie('mycookie','Jithu')  // created the cookie
    res.send('Cookie created')
})

app.get('/username-cookie',(req,res)=>{
    res.cookie('data',{userName:'Jithu',email:'Jithu@gmail.com'})  
    res.send('username and password received')
})

// read-coockie
app.get('/read-cookie',(req,res)=>{
    console.log(req.cookies);
    if(Object.keys(req.cookies).length >=1){
        res.send(req.cookies)
    } else {
        res.send(`username and password received `)
    }
})

app.listen(port,console.log(`the application is running in ${port}`))