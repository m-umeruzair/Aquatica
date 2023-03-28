const express = require("express");
const product = require("../models/product");
const router = express.Router();


router.delete("/deleteProduct", async (req,res) =>{
    if(req.query.x == undefined){
      res.status(400).send("Delete field not found")
    
    }
    else {
        var del= req.query.x
        
      await product.deleteOne({productName:del})
      res.status(200).send("Entry Deleted")

  }
  
  })


module.exports = router;