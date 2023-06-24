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