const menuSchema = require("../models/Menu.js");

exports.postMenuItem = async(req,res) =>{
    const menuItem = new menuSchema(req.body);
    try{
        await menuItem.save();
        res.send(menuItem);
    }catch(err){
        res.status(500).send(err,"internal server error");
    }
}
exports.deleteMenuItem = async(req,res) =>{
    const menuItem = req.body.id
    try{
        await menuSchema.findByIdAndDelete(menuItem)
        res.send(menuItem);
    }catch(err){
        res.status(500).send(err,"internal server error");
    }
}
exports.availabilityOfItem = async (req, res) => {
    console.log('PUT');
    const itemId = req.params.id;
  
    try {
      const item = await menuSchema.findById(itemId);
  
      if (!item) {
        return res.status(404).send('Item not found');
      }
  
      item.avaliablity = !item.avaliablity;
      await item.save();
  
      res.send(item);
    } catch (err) {
      console.log('Error:', err);
      res.status(500).send('Internal server error');
    }
  };  