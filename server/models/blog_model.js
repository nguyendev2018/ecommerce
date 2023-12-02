const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var blogSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    desc:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    numberView:{
        type:Number,
        default : 0
    },
    isLiked : {
        type : Boolean,
        default : false
    },
    isDisliked : {
        type : Boolean,
        default : false
    },
    likes : [
        {
            type : mongoose.Types.ObjectId,
            ref : "User"
        }
    ],
    dislikes : [
        {
            type: mongoose.Types.ObjectId,
            ref : "User"
        }
    ],
    image: {
        type : String,
        default : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAnsOLto0UQYxF-9vTz5r81VwQkCaFaFm-Ng&usqp=CAU"
    },
    author : {
        type : String,
        default : "Admin"
    }
}, {
    timestamps : true,
    toJSON : {virtuals : true},
    toObject : {virtuals : true}
});

//Export the model
module.exports = mongoose.model('Blog', blogSchema);