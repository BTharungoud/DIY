const menuSchema = require("../models/Menu.js");

exports.getMenuList = async(req,res) =>{
    try{
        const menu = await menuSchema.find();
        res.json(menu)
    }catch(err){
        console.log(`error at:${err}`)
        res.status(500).json({error:"internal server error"})
    }
}
exports.getUsermenulist = async (req,res) => {
    try{
        const usermenu = await menuSchema.find({avaliablity:true});
        res.send(usermenu)
    }catch(error){
        console.log(`error at:${error}`)
        res.status(500).json({error:"internal server error"})
    }
}