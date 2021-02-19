const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title:{
        type: String,
        required:[true,"please add product title"],
        trim:true,
        maxlength:[100,"Title Is Too long"],
    },
    description:{
        type: String,
        required:false,
        maxlength:[500, "Description can not be more then 500 characters"]
    },
    image:{
        type: String,
        required: true,
    },
    price:{
        type: Number,
        required: true,
    }
})

module.exports = mongoose.models.Product || mongoose.model('Product',ProductSchema);