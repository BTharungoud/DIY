const mongoose  = require("mongoose");

const Orderschema = new mongoose.Schema({
    username : {
        type : String,
        required : true
    },
    SelectedItems : [
        {
            _id:{
                type : String,
            },
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
                required : true
            },
            quantity:{
                type : Number,
                required : true
            }
        }
    ]
},{timestamps:true})

module.exports = mongoose.model("Orders",Orderschema);