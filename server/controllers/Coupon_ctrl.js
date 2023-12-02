const modelCount = require("../models/coupon_model");
const asyncHandler = require('express-async-handler');
const createCoupon = asyncHandler(async(req,res)=>{
    const {name, discount, expiry} = req.body;
    if (!name || !discount || !expiry) {
        throw new Error("Missing Inputs")
    }
    const data =  await modelCount.create({
        ...req.body,
        //24 giờ * 60 phút * 60 giây * 1000 milisecond
        //
        expiry : Date.now() + +expiry * 24 * 60 * 60 * 1000
    });
    return res.json({
        success : data ? true : false,
        data
    })
})
const getAllCoupon = asyncHandler(async(req,res)=>{
    const data = await modelCount.find().select("-createAt -updateAt");
    return res.json({
        success : data ? true : false,
        coupons : data ? data : "Cannot get coupon"
    })
})
const updateCoupon = asyncHandler(async(req,res)=>{
    const {linkId} = req.query;
    // kiểm tra trước khi chạy vào duyệt Update
    if(Object.keys(req.body).length === 0) {
        throw new Error("Missing inputs");
    }
    if(req.body.expiry) {
        req.body.expiry =  Date.now() + +req.body.expiry * 24 * 60 * 60 * 1000
    }
    const data = await modelCount.findByIdAndUpdate(linkId, req.body,{new : true});
    return res.json({
        success : data ? true : false,
        data
    })
})
const deleteCoupon = asyncHandler(async(req,res) =>{
    const {linkId} = req.params;
    const data = await modelCount.findByIdAndDelete(linkId);
    return res.json({
        success : data ? true : false,
        data
    })
})
module.exports = {
    createCoupon,
    getAllCoupon,
    updateCoupon,
    deleteCoupon
}