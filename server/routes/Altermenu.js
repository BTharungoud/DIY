const express = require("express");
const {postMenuItem,deleteMenuItem,availabilityOfItem}= require("../controllers/Altermenu.js");
const router = express.Router();

router.post("/",postMenuItem);
router.delete("/",deleteMenuItem);
router.put("/:id",availabilityOfItem);


module.exports = router;