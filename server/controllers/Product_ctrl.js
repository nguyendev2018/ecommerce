const modelProduct  = require("../models/Product_model");
const asyncHandler = require('express-async-handler');
const mongoose = require('mongoose');
const customSlugify= require("../customSlug");
mongoose.set('strictQuery', true);
const createProduct = asyncHandler(async(req,res)=>{
    if(Object.keys(req.body).length == 0)  throw new Error("Missing Inputs")
    req.body.slug = customSlugify(req.body.title)
    const newProduct = await modelProduct.create(req.body);
    return res.status(200).json({
        success : newProduct  ?true : false,
        createProduct : newProduct ? newProduct : "Cannot new product"
    })
})
const getProduct =  asyncHandler(async(req,res)=>{
    const {linkId}  = req.params;
    const dataProduct = await modelProduct.findById(linkId)
    return res.status(200).json({
        mes : "Get product success",
        dataProduct
    })
})
//Filter, sorting and pagination
const getAllProduct = asyncHandler (async(req,res) =>{  
    const dataClone = {...req.query};
    let stringData = JSON.stringify(dataClone);
    stringData =  stringData.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`);
    const formatQueries = JSON.parse(stringData);  
    if(dataClone?.title) {
        formatQueries.title  = {
            $regex : dataClone.title,
            $options : "i"
        }
    }
    let queryCommand =  modelProduct.find(formatQueries);
  
    //SORT
    let commandSort = req.query.sort;
    if (commandSort) {
        const sortBy = commandSort.split(',').join(' ')
        queryCommand =  queryCommand.sort(sortBy);
    }
    
    //FIELD LIMITING
    let commandFields = req.query.fields;
    if (commandFields) {
        const fields = commandFields.split(',').join(' ')
        queryCommand = queryCommand.select(fields)
    } else {
        queryCommand = queryCommand.select('-__v')
    }
    //PAGINATION
    let queryPage = req.query.page;
    let queryLimit = req.query.limit;
    const page = queryPage * 1 || 1;
    const limit = queryLimit * 1 || 100;
    const skip = (page - 1) * limit;
    queryCommand = queryCommand.skip(skip).limit(limit);

    //EXECUTE QUERY
    queryCommand.exec(async(err, response)=>{
        if(err) throw new Error(err.message);
        const counts = await modelProduct.find(formatQueries).countDocuments();
        return res.status(200).json({
            success : response ? true : false,
            counts,
            data : response ? response : 'Cannot get Products',
        })
    })
    
})
const updateProduct = asyncHandler(async(req,res)=>{
    if (typeof req.body.title === 'string' && req.body.title !== "") {
        req.body.slug = customSlugify(req.body.title);
    }
    const {idUpdate} = req.params;
    const productUpdate = await modelProduct.findByIdAndUpdate(idUpdate,req.body,{new : true});
    return res.status(200).json({
        success : productUpdate ? true :false,
        dataUpdate : productUpdate ? productUpdate : "Cannot up loading Update"
    })
})
const updateImageProduct = asyncHandler(async(req,res)=>{
    const {pid} = req.params;
    if(!req.files) throw new Error('Missing Inputs');
    const response = await modelProduct.findByIdAndUpdate(pid, {$push:{images : {$each:req.file.map(el => el.path)}}}, {new:true})
})
const delProduct = asyncHandler(async(req,res)=>{
    const {idDelete} = req.params;
    const delProduct = await modelProduct.findByIdAndDelete(idDelete);
    return res.status(200).json({
        success : delProduct ? true : false,
        delProduct
    })
})
//Khi đánh giá mà người ta muốn sửa lại
//Hoặc người ta muốn thêm vào 
const ratings = asyncHandler(async(req,res)=>{
    const {_id} = req.userToken;
    const {star,comment,productId} = req.body;
    if(!star || !productId) throw new Error("Missing Inputs");
    const ratingsProduct = await modelProduct.findById(productId);
    const conditionProduct = ratingsProduct?.rating?.find(el => el.idUser.toString() === _id);
    if(conditionProduct) {
        console.log('false');
        console.log(conditionProduct);
        //update star and comment 
        //add star and comment
        const response = await modelProduct.findByIdAndUpdate(productId, {
        $push : {rating : {star, comment, idUser: _id}}
    },{new : true});
    console.log(response);
    }
   
    return res.status(200).json({
        status : true,
    })
})
module.exports = {
    createProduct, 
    getProduct,
    getAllProduct,
    updateProduct,
    delProduct,
    ratings

}