const express = require("express");
const {getMenuList,getUsermenulist} = require("../controllers/Menu.js");

const router = express.Router();

router.get("/",getMenuList);
router.get("/users",getUsermenulist);

module.exports = router;