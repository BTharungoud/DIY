const express = require("express");
const { adminLogin, userLogin } = require("../controllers/Login.js");
const adminSchema = require("../models/admin.js")
const bcrypt = require("bcryptjs");
const router = express.Router();

router.post("/", async (req, res) => {
    const { username, password } = req.body;
    const user = await adminSchema.findOne({ username: username });
    const isPasswordVaild = await bcrypt.compare(password, user.password)
    if (user && isPasswordVaild) {
        adminLogin(req, res);
    }
    else { userLogin(req, res) };
})

module.exports = router;