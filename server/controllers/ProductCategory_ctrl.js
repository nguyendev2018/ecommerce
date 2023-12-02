const { query } = require('express');
const modelProductCategory = require('../models/ProductCategory_model');
const asyncHandler = require('express-async-handler');
const createProductCategories = asyncHandler(async(req,res)=>{
    const newCategory = await modelProductCategory.create(req.body);
    return res.status(200).json({
        success : newCategory ? true : false,
        createCategory : newCategory ? newCategory : "Cannot new category"
    })
})
const getProductCategories = asyncHandler(async(req,res)=>{
    const dataCategory = await modelProductCategory.find().select('title _id');
    return res.json({
        success : dataCategory ? true : false,
        dataCategory 
    })
})
const updateProductCategories = asyncHandler(async(req,res) =>{
    const { pcid } = req.params;
    const data = await modelProductCategory.findByIdAndUpdate(pcid, req.body, {new : true});
    return res.json({
        success : data ? true : false,
        data
    })
})
const deleteProductCategories = asyncHandler(async(req,res) =>{
    const { linkId } = req.params;
    const data = await modelProductCategory.findByIdAndDelete(linkId);
    return res.status(200).json({
        success : data ? true : false,
        data
    })

})
module.exports = {
    createProductCategories,
    getProductCategories,
    updateProductCategories,
    deleteProductCategories
}