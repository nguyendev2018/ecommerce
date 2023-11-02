// xác minh thử có đúng với accessToken hay không
const jwt = require('jsonwebtoken');
const asyncHandler = require("express-async-handler");
const verifyAccessToken = asyncHandler(async(req,res,next) =>{
        // bearer token
        //thường token sẽ được gửi trong header
        // acces token thường bắt đầu từ chữ Bearer
        // Example : Bearer sdsdsdsd
        // Nên cần tách mã ra
        //decode ở đây có nghĩa là giá trị được truyền vào ở createAccessToken
        if(req?.headers?.authorization?.startsWith("Bearer")){
            const token = req.headers.authorization.split(' ')[1];
            jwt.verify(token, process.env.JWT_SECRET,(err,decode)=>{
                if(err) return res.status(401).json({
                    success : false,
                    mes : "Invalid access token"
                })
                req.userToken = decode;
                next()
            })
        }
        else {
            return  res.status(401).json({
                success : false,
                mes : "Require authentication !!!"
            })
        }
    })
    const isAdmin = asyncHandler(async(req,res,next) => {
        const {role} = req.userToken;
        if(role !== "admin"){
            return res.status(401).json({
                success : false,
                mes : "Require admin role"
            })
        }
        next()
    })
module.exports = {
    verifyAccessToken,
    isAdmin
}