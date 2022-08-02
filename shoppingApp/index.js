const express = require('express')
const exphbrs = require('express-handlebars')

const app = express()
const port = 3004

const products =[{
        _id: 1,
        pName:'TV',
        pDesc:'For watching',
        pPrice: 15000
    },
    {
        _id: 2,
        pName:'Mobile',
        pDesc:'For calling',
        pPrice: 20000
    },
    {
        _id: 3,
        pName:'Laptop',
        pDesc:'For watching',
        pPrice: 45000
    }
]

app.engine('handlebars',exphbrs.engine())
app.set('view engine','handlebars')

// Built in middleware
app.use(express.urlencoded({extended: true}))

app.get('/',(req,res)=>{
    res.render('./home.handlebars')
})
app.get('/products',(req,res)=>{

    res.render('./products.handlebars',{products})
})
app.get('/addProducts',(req,res)=>{

    res.render('./addProduct.handlebars')
})


app.post('/products/add-Products',(req,res)=>{               // endpoint that we will give to the client
    console.log(req.body);
    let { _id, pName, pDesc, pPrice}=req.body;
    
    // console.log(_id);

    _id= parseInt(_id)
    pPrice =parseInt(pPrice)
    products.push({ _id, pName, pDesc, pPrice});

    res.redirect('/products')
})

// add
app.post('/addProducts',(req,res)=>{               
    res.redirect('/addProducts')
})

// edit
app.get('/products/edit-Products/:_id',(req,res)=>{
    console.log(req.params._id);

    const index = products.findIndex((products)=>{
        return parseInt(products._id) === parseInt(req.params._id)
    })
    console.log(index);
    const selectProduct = products[index]
    res.render('./editProduct.handlebars',{selectProduct})
})

app.post('/products/edit-Products',(req,res)=>{
    console.log(req.body);

    const index = products.findIndex((products)=>{
        return parseInt(products._id) === parseInt(req.body._id)
    })
    console.log(index);
    
    products[index] = req.body;
    res.redirect('/products')
})

// delete
app.get('/products/delete-Products/:_id',(req,res)=>{
    console.log(req.params._id);
    const index = products.findIndex((products)=>{
        return parseInt(products._id) === parseInt(req.params._id)
    })
    console.log('delete', index);
    products.splice(products[index],0)
    // res.redirect('/products')
})

app.listen(port,()=>{
    console.log(`Server is listen to the port number ${port}`);
})