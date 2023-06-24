const express = require("express");
const {getMenuList} = require("../controllers/Menu.js");


const router = express.Router();

router.get("/",getMenuList);

module.exports = router;