const express = require("express");
const Product = require("../models/product");
const router = express.Router();


router.post("/createProduct", async (req, res) => {
   
    if(req.body.productName==undefined | req.body.productId==undefined || req.body.productType==undefined  
     || req.body.productPrice==undefined || req.body.productQuantity==undefined || req.body.productCompany==undefined ){
        res.status(400).send("Wrong Input")
    }
    else{
     const product = new Product({
       
       productName: req.body.productName,
       productCompany: req.body.productCompany,
       productId: req.body.productId,
       productType: req.body.productType,
       productQuantity: req.body.productQuantity,
       productPrice:req.body.productPrice,
       
    });
   
    const saveproduct = await product.save();
   
    res.status(200).send("Product created")
  
    }
    
  });


  module.exports = router;