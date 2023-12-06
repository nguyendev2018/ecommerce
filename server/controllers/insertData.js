const asyncHandler = require('express-async-handler');
const brandData = require('../../data/cate_bard');
const ProductCategory = require("../models/ProductCategory_model");
const modelProduct = require("../models/Product_model");
const data = require("../../scraping-data/data-2.json")
const { default: slugify } = require('slugify');
const fn = async (product) =>{
    await modelProduct.create({
        title : product?.name,
        slug : slugify(product.name),
        description : product?.description,
        brand : product?.brand,
        price : product.price,
        category : product.category,
        quantity : Math.round(Math.random() * 1000),
        sold : Math.round(Math.random() * 1000),
        images: product?.images,
        color : product?.variant?.find(el =>el.label === "Color").variants[0];
    })
}
const insertProduct = asyncHandler(async(req,res)=>{
   const dataProduct = [];
   for (let product of data) dataProduct.push(fn(product))
    return res.json({
        success : response ? true : false,
        createBrand : response ? response : "Cannot create new brand"
    })
})
module.exports = {
    insertProduct
}