const jwt = require("jsonwebtoken");
const createAccessToken = (uid, role) =>{
    return jwt.sign({_id: uid, role}, process.env.JWT_SECRET,{expiresIn: "3d"})
} 
const createRefreshToken = (uid) =>{
    return jwt.sign({_id: uid}, process.env.JWT_SECRET,{expiresIn: "7d"})
} 
module.exports = {
    createAccessToken,
    createRefreshToken
}