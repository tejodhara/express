const express = require('express')
const exphbs = require('express-handlebars')


const app = express()
const port = 3005

let router = express.Router();
router.use(routerlevel)
app.use('/demo',router)

app.engine('handlebars',exphbs.engine())
app.set('view engine', 'handlebars')

// app.use(routerlevel)         // middleware

// controllers
app.get('/',(req,res)=>{
    res.render('./home.handlebars')
})
router.get('/about',routerlevel,(req,res)=>{
    res.render('./about.handlebars')
})
app.get('/contact',routerlevel,(req,res)=>{
    res.render('./contact.handlebars')
})

// middleware
function routerlevel(req,res,next){
    if(!req.query.age){
        res.send('please provide the age')
    } else if(req.query.age >= 18){
        // res.send('You are elligible for voting')
        next();

    } else if(req.query.age < 18) {
        res.send('You are not elligible for voting')
    } else {
        next();
    }
}

app.listen(port,()=>{
    console.log(`Server is listen to port ${port}`);
})