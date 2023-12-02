const modelBlogCategory = require('../models/blogCategory_model');
const asyncHandler = require('express-async-handler');
const createBlogCategory = asyncHandler(async(req,res)=>{
    const newBlogCategory = await modelBlogCategory.create(req.body);
    return res.status(200).json({
        success : newBlogCategory ? true : false,
        createCategory : newBlogCategory ? newBlogCategory : "Cannot new category"
    })
})
const getBlogCategory = asyncHandler(async(req,res)=>{
    const dataBlogCategory = await modelBlogCategory.find().select('title _id');
    return res.json({
        success : dataBlogCategory ? true : false,
        dataBlogCategory 
    })
})
const updateBlogCategory = asyncHandler(async(req,res) =>{
    const { pcid } = req.params;
    const data = await modelBlogCategory.findByIdAndUpdate(pcid, req.body, {new : true});
    return res.json({
        success : data ? true : false,
        data
    })
})
const deleteBlogCategory = asyncHandler(async(req,res) =>{
    const { linkId } = req.params;
    const data = await modelBlogCategory.findByIdAndDelete(linkId);
    return res.status(200).json({
        success : data ? true : false,
        data
    })

})
module.exports = {
    createBlogCategory,
    getBlogCategory,
    updateBlogCategory,
    deleteBlogCategory
}