const express = require('express');
const exphbrs = require('express-handlebars')

const app = express()
const port = 3002

app.engine('handlebars',exphbrs.engine())            // attaching handlebars engine to app
app.set('view engine',"handlebars")                  // providing environment for the engine

// controller
app.get('/',(req,res)=>{  
    const person={
        name: 'Sai',
        id: 122,
    };                  
    res.render('./home.handlebars', {person})
})

app.get('/products',(req,res)=>{

    res.render('./products.handlebars',{})
})
app.get('/contactus',(req,res)=>{
    const presons = [{
            name:'Suhas',
            designation:'Full stact developer',
        },
        {
            name:'Megha',
            designation:'Corporate trainer',
        },
        {
            name:'Hemanth',
            designation:'DevOps Engineer',
        },
        {
            name:'Pradeep',
            designation:'CEO',
        },
        {
            name:'Sai',
            designation:'Full stact developer'
        },
    ]
    res.render('./contactus.handlebars',{presons})
})

app.get('/about',(req,res)=>{
// const contact=[{name: 'Sai',phone: 28527419603, place:'bangalore'},{name: 'Sai',phone: 28527419603, place:'bangalore'}]
const contact=['sai','hemanth','tanmoy','jithin','pradeep','faizan']
res.render('./about.handlebars',{contact})
})

app.listen(port,()=>{                       
       console.log(`the server is listening on port ${port}`);
})