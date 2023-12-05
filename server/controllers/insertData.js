const modelProduct  = require("../models/Product_model");
const data = require('../../scraping-data/data-2.json')
const asyncHandler = require('express-async-handler');
const { default: slugify } = require("slugify");
const fn = async(product)=>{
    await modelProduct.create({
        title : product.name,
        slug : slugify(product.name),
        description : product.description,
        brand : product.brand,
        price : product.price
    })
}
const insertProduct = asyncHandler(async(req,res) =>{
    const response = await Brand.create(req.body);
    return res.json({
        success : response ? true : false,
        createBrad : response ? response : "Cannot create new brand"
    })
})
module.exports = { 
    insertProduct
}