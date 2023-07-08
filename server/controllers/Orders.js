const Orderschema = require("../models/orders.js");

exports.PostOrder = async(req,res) =>{
    try{
        const newOrder = new Orderschema(req.body);
        await newOrder.save()
        res.status(200).json({newOrder});
    }catch(error){
        res.status(500).send(error,"internal server error");
    }
}
exports.GetOrders = async(req,res) =>{
    try{
        const Orders = await Orderschema.find();
        res.send(Orders);
    }catch(error){
        res.status(500).send(error,"internal server error");
    }
}