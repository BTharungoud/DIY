const express = require("express");
const {PostOrder,GetOrders} = require("../controllers/Orders.js")
const router = express.Router();

router.get("/",GetOrders)

router.post("/",PostOrder)

module.exports = router;