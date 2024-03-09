const adminSchema = require("../models/admin.js");
const userSchema = require("../models/user.js");
const bcrypt = require("bcryptjs");
require('dotenv').config();
const SCODE = process.env.SCODE;
const SECRET = process.env.SECRET;

exports.addAdmin = async (req, res) => {
    try {
        const {username,password,securityCode} = req.body;
        if(!username||!password){res.send("Enter all fields")}
       else  if (await adminSchema.findOne( {username:username} )) {
            res.send("admin already exsit plz go for login")
        }
        else if (req.body.securityCode != SCODE) { res.send("plz enter Admin code(securityCode) correctly") }
        else {
            const adminpasscode = password+'@'+securityCode
            const salt = await bcrypt.genSalt(10);
            const hashedpassword = await bcrypt.hash(adminpasscode,salt);
            const newAdmin = new adminSchema({
                username:username,
                password:hashedpassword,
                securityCode:securityCode
            });
            await newAdmin.save();
            res.send("Admin saved sucessfully, plz go for Login.");
        }
    } catch (err) {
        console.log(`Error at:${err}`);
    }
}

exports.addUser = async (req, res) => {
    try {
        const {username,password} = req.body;
        if(!username||!password){res.send("Enter all fields")}
        else if(await userSchema.findOne({username:username})) {
            res.send("User already exsit plz go for login")
        }
        else {
            const salt = await bcrypt.genSalt(10);
            const hashedpassword = await bcrypt.hash(password,salt);
        const newUser = new userSchema({
            username:username,
            password:hashedpassword
        });
        await newUser.save();
        res.send({message:"User saved sucessfully, plz go for Login"});
        }
    } catch (err) {
        console.log(`Error at:${err}`)
    }
}