const express = require('express')
const exphbrs = require('express-handlebars')       

const app = express()
const PORT = 3004

// scheema
const products =[

]

// setting engine 
app.engine('handlebars',exphbrs.engine())
app.set('view engine','handlebars')

// Built in middleware
app.use(express.urlencoded({extended: true}))

// navigators
app.get('/',(req,res)=>{                                // giving the path 
    res.render('./home.handlebars')
})




app.post('/path',(req,res)=>{               // endpoint that we will give to the client  // path -> products/add-Products          
    console.log(req.body);
    let { }=req.body;                                  // destructure the schema
    // console.log(_id);
    _id= parseInt(_id)                                 // to convert string to number
    products.push({ destructured_data });             // destructured data ex: _id, pName, pDesc, pPrice
    res.redirect('/products')
})

// HTTP methods
// add                                                // in place of path give your required path ex: path-> addProducts
app.post('/path',(req,res)=>{               
    res.redirect('/path')
})

// edit                                                 // ex: path-> products/edit-Products
app.get('/path/:_id',(req,res)=>{
    const index = products.findIndex((products)=>{
        return parseInt(products._id) === parseInt(req.params._id)
    })
    console.log(index);
    const selectProduct = products[index]
    res.render('path',{selectProduct})
})

app.post('/path',(req,res)=>{                           // ex: path-> products/edit-Products
    console.log(req.body);
    const index = products.findIndex((products)=>{
        return parseInt(products._id) === parseInt(req.body._id)
    })
    console.log(index);
    
    products[index] = req.body;
    res.redirect('/products')
})

// delete                                               // ex:path -> products/delete-Products
app.get('/path/:_id',(req,res)=>{
    console.log(req.params._id);
    const deleteIndex = products.findIndex((val)=>val._id === req.params._id)
    console.log('delete', deleteIndex);
    products.splice(deleteIndex,1)
    res.redirect('/products')
})

app.listen(port,()=>{
    console.log(`Server is listen to the port number ${PORT}`);
})