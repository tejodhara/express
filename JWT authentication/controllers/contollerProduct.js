const { model } = require('mongoose');
const product = require('../models/productsModel')

const addProduct = async(req,res)=>{
    try{
        let {pName,pDesc,pPrice} = req.body;
        await product.insertMany({pName,pDesc,pPrice})
        res.status(200).json({
            Error: false,
            message: 'Data has been added successfully'
        })
    }catch(err){
        console.log(err);
    }
}

const getProduct = async (req,res)=>{
    try{
        await product
            .find()
            .then((data)=>{
                res.send({message:'get data successfully', data})
            })
            .catch((error)=>{
                res.status(500).send(error)
            })
    }catch(err){
        console.log(err);
    }
}

const editProdcut = async(req,res)=>{
    let _id = req.params._id;
    let {pName,pDesc,pPrice} = req.body;
    try{
        await product.updateOne({_id},{pName,pDesc,pPrice})
        .then((data)=>{
            res.status(200).json({
                error: false,
                message: 'Data has been updated successfully',
                data
            })
        })
        .catch((error)=>{
            res.status(500).send(error)
        })
    } catch(err){
        console.log(err);
    }
}
const deleteProdcut = async(req,res)=>{
    let _id = req.params._id;
    let {pName,pDesc,pPrice} = req.body;
    try{
        await product.deleteOne({_id},{pName,pDesc,pPrice})
        .then((data)=>{
            res.status(200).json({
                error: false,
                message: 'Data has been deleted successfully',
                data
            })
        })
        .catch((error)=>{
            res.status(500).send(error)
        })
    } catch(err){
        console.log(err);
    }
}

module.exports ={addProduct,getProduct,editProdcut,deleteProdcut}