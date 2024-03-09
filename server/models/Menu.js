const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema({
    itemName:{
        type : String,
        required : true
    },
    itemCost:{
        type : Number,
        required : true
    },
    avaliablity:{
        type : Boolean,
        default : true,
        required : true
    },
    quantity:{
        type : Number,
        default : 0,
        required : true
    }
});

module.exports =mongoose.model("menu",menuSchema);
