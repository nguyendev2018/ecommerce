const modelProduct  = require("../models/Product_model");
const modelCategory = require("../models/ProductCategory_model");
const dataProduct = require('../../scraping-data/data-2.json');
const dataCategory = require('../../scraping-data/cate_brand');
const asyncHandler = require('express-async-handler');
const { default: slugify } = require("slugify");
const fn = async(product)=>{
    await modelProduct.create({
        title : product?.name,
        slug : slugify(product?.name),
        description : product?.description,
        brand : product?.brand,
        price : Math.round(Number(product?.price.match(/\d/g).join(''))/100),
        category : product?.category[1],
        quantity : Math.round(Math.random() * 1000),
        sold : Math.round(Math.random() * 1000),
        images : product?.images,
        color : product?.variants?.find(el =>el.label == "Color")?.variants[0] || "",
        thumb : product?.thumb,
        totalRatings : Math.round(Math.random() *5)
    })
}
const fnCategory = async(category)=>{
    await modelCategory.create({
        title : category.title || "",
        brand : category.brand
    })
}
const insertProduct = asyncHandler(async(req,res) =>{
    const promies = []; 
    for(let product of dataProduct) 
        promies.push(fn(product))
        await Promise.all(promies);
        return res.json('Done');
  
})
const insertCategory = asyncHandler(async(req,res)=>{
    const promies = []; 
    console.log(dataCategory);
    for(let category of dataCategory) 
    promies.push(fnCategory(category))
    await Promise.all(promies);
    return res.json('Done');
    
})
module.exports = { 
    insertProduct,
    insertCategory
}