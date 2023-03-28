const express = require("express")
const product= require("../models/product")
const router = express.Router();


router.get("/readProduct" , async(req, res) =>{
  var x=req.query.x;

    if((req.body.productId == undefined || req.body.productId == null) && x!=null ){
    
     var Product= await product.find({productCompany:x})
    
    }
  
    else{
    var Product=  await product.find({productId : req.body.productId,'productCompany':x})
    }
    if (product.length > 0){
      res.status(200).send(Product)
    }
    else{
      res.status(404).send("No Product found")
    }
})


module.exports = router;