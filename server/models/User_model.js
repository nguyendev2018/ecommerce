const mongoose = require('mongoose'); // Erase if already required
const bcrypt =  require("bcrypt")
var userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique : true
    },
    firstName:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
        required:true,
        unique : true
    },

    phone:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    passwordHash: {
        type : String
    },
    role:{
        type:String,
        default : "user"
    },
    cart:{
        type:Array,
        default : []
    },
    address: [{type : mongoose.Types.ObjectId, ref: "address"}],
    wishlist: [{type : mongoose.Types.ObjectId, ref: "wishlist"}],
    isBlocked : {
        type : Boolean,
        default : false
    },
    refreshToken : {
        type : String
    },
    passwordChangeAt : {
        type : String
    },
    passwordResetToken : {
        type : String
    }
},{
    timestamps : true
});
userSchema.pre("save",async function(next){
    if(!this.isModified("password")){
        next()
    }
const salt = bcrypt.genSaltSync(10);
this.passwordHash =  await bcrypt.hash(this.password, salt);
})
// tuyển tập các hàm sử dụng trong model
userSchema.methods = {
    isCorrectPassword : async function (passwordHash) {
        return await bcrypt.compare(passwordHash, this.passwordHash)
    }
}
//Export the model
module.exports = mongoose.model('User', userSchema);