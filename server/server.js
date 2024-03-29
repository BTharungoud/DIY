const express = require("express");
const database = require("./mongoose.js");
const signuprouter = require("./routes/Signup.js");
const cors = require("cors");
const loginrouter = require("./routes/Login.js");
const menurouter = require("./routes/Menu.js");
const altermenu = require("./routes/Altermenu.js")
const Ordersroute = require("./routes/Orders.js")
const app = express();
const PORT = 5000;
app.use(express.json())
app.use(cors());
database.once("open",()=>{console.log("pass to Db")});
app.get("/",(req,res)=>{
    res.redirect("https://dashing-seahorse-bc7473.netlify.app/");
});
app.use("/login",loginrouter);
app.use("/signup",signuprouter);
app.use("/menu",menurouter);
app.use("/menu/admin",altermenu);
app.use("/orders",Ordersroute);
app.listen(PORT, async () => {
    console.log(`server is now live on http://localhost:${PORT}`);
  });
  