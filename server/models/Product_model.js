const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
// trim có chức năng bỏ dấu cách hai đầu
var userSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim : true
    },
    slug:{
        type:String,
        lowercase : true
    },
    description:{
        type:Array,
        required:true,
    },
    brand:{
        type:String,
        required:true,
    },
    price : {
        type : Number,
        required : true
    },
    category : {
        type : String,
        required : true
    },
    quantity : {
        type : Number,
        default : 0
    },
    sold : {
        type : Number,
        default : 0
    },
    thumb : {
        type : String
    },
    images : {
        type : Array
    },
    color : {
<<<<<<< HEAD
        type : Array
=======
        type : String,
        require : true
>>>>>>> 420a3e82298c06a1e7c05b15d117cc76331549f7
    },
    rating : [{
        star : {type :Number},
        comment : {type : String},
        idUser : {type : mongoose.Types.ObjectId, ref : 'User'},
    }],
    totalRatings : {
        type : Number,
        default : 0
    }

},{
    timestamps : true
});

//Export the model
module.exports = mongoose.model('Product', userSchema);