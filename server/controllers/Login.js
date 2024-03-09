const adminSchema = require("../models/admin.js");
const userSchema = require("../models/user.js")
const JWT = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
require('dotenv').config();
const SECRET = process.env.SECRET;

exports.adminLogin = async (req,res)=>{
    try{
        const {username , password} = req.body;
        const admin  = await adminSchema.findOne({username:username})
        if(!username||!password){
            res.status(400).json({message:"Enter all fields"})
        }
        else if(admin){
            const isPasswordVaild = await bcrypt.compare(password,admin.password)
            if(isPasswordVaild){
                const token = JWT.sign({ username: username }, SECRET, { expiresIn: "1d" });
                res.cookie("adminToken", token);
                res.status(200).json({token:token,username:username});
            }
            else{res.status(400).json({message:"Enter correct password"})}
        }else{
            res.status(400).json({message:"Admin doesn't exist!"})
        }
    }catch(err){
        console.log(`error at:${err}`)
    }
}

exports.userLogin = async (req,res)=>{
    try{
        const {username , password} = req.body;
        const user  = await userSchema.findOne({username:username})
        if(!username||!password ||password==null){
            res.status(400).json({message:"Enter all fields"})
        }
        else if(user){
            const isPasswordVaild = await bcrypt.compare(password,user.password)
            if(isPasswordVaild){
                const token = JWT.sign({ username: username }, SECRET, { expiresIn: "1d" });
                res.cookie("userToken", token);
                res.status(200).json({token:token,username:username});
            }
            else{res.status(400).json({message:"Enter correct password"})}
        }else{
            res.status(400).json({message:"user doesn't exist!"})
        }
    }catch(err){
        console.log(`error at:${err}`)
    }
}