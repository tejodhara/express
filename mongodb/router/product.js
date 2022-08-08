const express = require("express");
const router = express.Router();
const product = require("../models/product.js");        // imprt the schema

// controller to add product
router.get("/addproduct", (req, res) => {             // read the data
  res.render("./addproduct.handlebars");
});

// creting endpoint for monolathic appliacation
router.post("/product/add", async (req, res) => {
  console.log(req.body);
  let { pName, pDesc, pPrice } = req.body;    // destructuring // this data is received from front end
  try {
    await product.insertMany({ pName, pDesc, pPrice });         // here we need to give the schema   
    // res.redirect('/products/products')
  } catch (err) {
    console.log(err);
  }
});

router.get('/product/products', async (req,res)=>{
  try{
        const data = await product.find().lean()        // lean mehtod will convert mongoose object to javascript objects
        res.render('./products.handlebars',{data})
  } catch(err){
    console.log(err);
  }
});

router.get('/proudct/edit-product/:_id', async (req,res)=>{
  const _id = req.params._id;
  try{
    const selectedDocs = await product.findOne({_id}).lean();
    console.log(selectedDocs);
    res.render('./editproduct.handlebars',{selectedDocs})
  } catch(err){
    console.log(err);
  }
})

router.post('/edit-proudct/:_id', async (req,res)=>{
  let { pName, pDesc, pPrice}= req.body;
  const _id =req.params._id;
  try{
    await product.updateOne({_id}, {$set:{_id ,pName, pDesc, pPrice}})
    res.redirect('/proudct/proudcts')
  } catch(err){
    console.log(err);
  }
})

router.get('/delete-product/:_id', async (req,res)=>{
  const _id = req.params._id;
  try{
    await product.deleteOne({
      _id,
    });
    res.redirect('/product/products');
  } catch(err){
    console.log(err);
  }
})

module.exports = router;



// try{

// } catch(err){
  
// }