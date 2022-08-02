const express = require('express')
const exphbs = require('express-handlebars')
const session = require('express-session')
const cookieParser = require('cookie-parser')
const {cookie}= require('express/lib/response')  

const app = express()
const port = 3007

const uname ='teja';
const pwd = 'teja';

// set Template engine
app.engine('handlebars',exphbs.engine())
app.set('view enigne','handlebars')

//  session middleware          // secrect key, resave false
app.use(session({
    secret: 'secret',
    saveUninitialized: true,
    resave:false,
    cookie:{
        maxAge: 60000,
    }
    })
);

// cookieparser middleware
app.use(cookieParser());


// Body parser middleware
app.use(express.urlencoded({extended: true}))
       
      
app.get('/',(req,res)=>{
    res.render('./login.handlebars')
})

app.get('/user',(req,res)=>{
    if(req.session.username){
        res.render('./user.handlebars')
    } else{
        res.redirect('/')
    }
})

app.post('/login',(req,res)=>{
    console.log(req.body.uname);
    console.log(req.body.pwd);
    console.log('ped',pwd);
    // if(req.body.uname && req.body.uname === uname)
    if(req.body.uname === uname && req.body.pwd === pwd)
    {
        req.session.username === req.body.uname;
        res.redirect('/user')
    } else {
        // res.redirect('/')
        res.send('not valid user')
    }

})

app.listen(port,console.log(`Server is listen to port ${port}`))