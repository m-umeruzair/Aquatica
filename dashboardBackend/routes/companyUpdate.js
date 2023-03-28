const express = require("express");
const company = require("../models/Company");
const router = express.Router();


router.put("/updateCompany", async (req, res) => {
    var x = req.body.data.x;
    
    var { companyName, companyEmail, companyNumber, companyRegistration, companyAddress, companyPassword, companyTotalSales} = req.body.data;
    if ( companyName == undefined && companyEmail == undefined && companyNumber == undefined && companyRegistration == undefined&&
        companyAddress == undefined && companyPassword == undefined && companyTotalSales == undefined)
     {
      res.status(400).send("Nothing to update")
    } else {
      
      if ( companyName != undefined) {
        await company.updateOne(
          { _id: x },
          { $set: { companyName: companyName } }
        );
      } 
      if ( companyEmail != undefined) {
       await company.updateOne(
          { _id: x },
          { $set: { companyEmail: companyEmail } }
        );
      }
      if (  companyNumber != undefined) {
       await company.updateOne(
          {  _id: x },
          { $set: {  companyNumber:  companyNumber } }
        );
      }
      if (  companyAddress != undefined) {
      await company.updateOne(
          {  _id: x },
          { $set: {  companyAddress: companyAddress } }
        );
      
      }
      if (  companyRegistration != undefined) {
        await company.updateOne(
          {   _id: x },
          { $set: {  companyRegistration:  companyRegistration } }
        );
        
      }
      if (  companyTotalSales != undefined) {
        await company.updateOne(
          {   _id: x },
          { $set: {  companyTotalSales:  companyTotalSales } }
        );
      }
      if ( companyPassword != undefined) {
        await company.updateOne(
          {   _id: x },
          { $set: {  companyPassword: companyPassword} }
        );
      }
      res.status(200).send("Update Completed")
    }
  });



  module.exports = router;