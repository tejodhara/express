const { rmSync } = require('fs');
const product = require('../models/modelProduct')       // collceiton inported      // write logic in this

const addProduct = async(req,res)=>{
    try{
        let {pName, pDesc, pPrice} = req.body;
        await product.insertMany({pName, pDesc, pPrice})
        res.status(200).json({
            Error: false,
            message: 'Data has been added successfully',
        })
    } catch(err){
        console.log(err);
    }
}

// read  
const getProduct = async(req,res)=>{
    try{
        // const data = await 
        await product
            .find()                         // to get all data use find(). find() is an async function
            .then((data)=>{
                res.send({message:'get data successfully',data})
            })
            .catch((error)=>{
            res.status(500).send(error)
            })
    } catch(err){
        res.send(err)
    }
}

// edit
const editProduct = async(req,res)=>{
    const _id= req.params._id;
    let {pName, pDesc, pPrice} = req.body;
    try{
        await product
            .updateOne({_id},{pName, pDesc, pPrice})
            .then((data)=>{
                res.status(200).json({
                    error: false,
                    message: 'data updated successfully',
                    data,
                })
            })
            .catch((error)=>{
                res.status(500).send(error)
            })
    }catch(err){
        console.log(err);
    }
}
// delete
const deleteProduct = async(req,res)=>{
    const _id= req.params._id;
    let {pName, pDesc, pPrice} = req.body;
    try{
        await product
            .deleteOne({_id},{pName, pDesc, pPrice})
            .then((data)=>{
                res.status(200).json({
                    error: false,
                    message: 'data deleted successfully',
                    data,
                })
            })
            .catch((error)=>{
                res.status(500).send(error)
            })
    }catch(err){
        console.log(err);
    }
}

module.exports = {addProduct,getProduct, editProduct, deleteProduct}