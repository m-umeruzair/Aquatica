const express = require("express");
const product = require("../models/product");
const router = express.Router();


router.put("/updateProduct", async (req, res) => {
    var x = req.body.data.x;
    
    var { productName, productId, productType, productQuantity, productPrice, productCompany } = req.body.data;
   
    if ( productName == undefined && productId== undefined && productType == undefined && productQuantity == undefined &&
         productPrice == undefined && productCompany == undefined)
     {
      res.status(400).send("Nothing to update")
    } else {
      if ( productName != undefined) {
        await product.updateOne(
          { productId: x },
          { $set: { productName: productName } }
        );
      } 
      if ( productId != undefined) {
       await product.updateOne(
          { productId: x },
          { $set: { productId: productId } }
        );
      }
      if (  productType !=undefined) {
       await product.updateOne(
          {  productId: x },
          { $set: {  productType:  productType } }
        );
      }
      if (  productQuantity != undefined) {
      await product.updateOne(
          {  productId: x },
          { $set: {  productQuantity:  productQuantity } }
        );
      
      }
      if (  productPrice != undefined) {
        await product.updateOne(
          {  productId: x },
          { $set: {  productPrice:  productPrice } }
        );
      }
      if ( productCompany != undefined) {
        await product.updateOne(
          {  productId: x },
          { $set: {  productCompany:  productCompany} }
        );
      }
      res.status(200).send("Update Completed")
    }
  });



  module.exports = router;