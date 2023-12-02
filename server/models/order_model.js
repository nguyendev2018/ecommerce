const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema({
    product:[{
        product : {type : mongoose.Types.ObjectId, ref : "Product"},
        count : Number,
        color : String
    }],
    status:{
        type:String,
        default : "Processing",
        enum: ['Cancelled', 'Processing', 'Successed']
    },
    mobile:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
});

//Export the model
module.exports = mongoose.model('User', userSchema);