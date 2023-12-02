const modelBlog = require("../models/blog_model");
const asyncHandler = require('express-async-handler');
const createNewBlog = asyncHandler(async(req,res) =>{
   const {title, desc, category}  = req.body;
    if(!title || !desc || !category) {
        throw new Error("Missing Inputs");
    }
    const data = await modelBlog.create(req.body);
    return res.status(200).json({
        success : data ? true : false,
        createBlog : data ? data : "Cannot create new blog"
    })
})
const updateBlog = asyncHandler(async(req,res)=>{
    const {linkId} = req.params ;
    if(!title || !desc || !category) throw new Error("Missing inputs");
    const data = await modelBlog.findByIdAndUpdate(linkId, req.body, {new:true});
    return res.status(200).json({
        success : data ? true : false,
        data
    })
})
const getBlog = asyncHandler(async(req,res)=>{
    const data = await modelBlog.find();
    return res.status(200).json({
        success : data ? true : false,
        data
    })
})
//LIKE
//DISLIKE

// khi người dùng like 1 bài blog thì : 
//     +Check xem trước đó người dùng có like hay không => bỏ like
//     +Check xem trước đó người dùng có dislike hay không => bỏ like/ thêm like
const likeBlog = asyncHandler(async(req,res) => {
    const {_id} = req.userToken;
    const { linkId } = req.body;
    if(!linkId) throw new Error("Missing inputs");
    const blog = await modelBlog.findById(linkId);
    const alreadyDisliked = blog?.dislikes?.find(el => el.toString() == _id);
    if(alreadyDisliked) {
        const response = await modelBlog.findByIdAndUpdate(linkId, {$pull: {dislikes: _id}, isDisliked : false}, {new : true});
        return res.json({
            success : response ? true : false,
            response
        })
    }
    const isLiked = blog?.likes?.find(el =>el.toString() === _id);
    if(isLiked) {
        const data = await modelBlog.findByIdAndUpdate(linkId, {$pull : {likes:_id}, isLiked : false}, {new : true});
        return res.json({
            success : data ? true : false,
            data
        })
    }else {
        const data = await modelBlog.findByIdAndUpdate(linkId, {$push : {likes:_id}, isLiked : true}, {new: true})
        return res.json({
            success : data ? true : false,
            data
        })
    }
})
module.exports = {
    createNewBlog,
    updateBlog,
    getBlog,
    likeBlog

}