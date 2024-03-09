const mongoose = require("mongoose");

require('dotenv').config();

const mongo = process.env.MONGO 

mongoose.connect(mongo).then(()=>{
    console.log("connected to DB.")
})

module.exports = mongoose.connection;

