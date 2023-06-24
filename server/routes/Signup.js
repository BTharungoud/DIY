const {addAdmin,addUser} = require("../controllers/Signup.js");
const express = require("express");


const router = express.Router();

router.post("/",(req,res)=>{
    if(req.body.securityCode!=null)addAdmin(req,res);
    else addUser(req,res);
})

module.exports = router;