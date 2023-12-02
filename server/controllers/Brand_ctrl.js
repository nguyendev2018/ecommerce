const modelBrand  = require("../models/brand_model");
const asyncHandler = require('express-async-handler');
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
const createBrand = asyncHandler(async(req,res)=>{
    if(Object.keys(req.body).length == 0)  throw new Error("Missing Inputs")
    req.body.slug = slugify(req.body.title)
    const newProduct = await modelBrand.create(req.body);
    return res.status(200).json({
        success : newProduct  ?true : false,
        createProduct : newProduct ? newProduct : "Cannot new product"
    })
})
const getBrand =  asyncHandler(async(req,res)=>{
    const {linkId}  = req.params;
    const dataProduct = await modelBrand.findById(linkId)
    return res.status(200).json({
        mes : "Get product success",
        dataProduct
    })
})
const getAllBrand = asyncHandler (async(req,res) =>{  
    const data = await modelBrand.find();
    return res.status(200).json({
        success : data ? true : false,
        data
    })
    
})
const updateBrand = asyncHandler(async(req,res)=>{
    const {linkId} = req.params;
    const data = await modelBrand.findByIdAndUpdate(linkId, req.body, {new: true});

    return res.status(200).json({
        success : data ? true :false,
        dataUpdate : data ? data : "Cannot up loading Update"
    })
})
module.exports = {
   createBrand,
   getBrand,
   getAllBrand, 
   updateBrand
}