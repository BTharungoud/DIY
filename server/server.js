const express = require("express");




const app = express();
const PORT = 5000;

app.use("/",(req,res)=>{
    res.send("DIY-server created sucessfully and listening on 5000");
})
app.listen(PORT,()=>{
    console.log(`server is now live on http://localhost:${PORT}/`)
})