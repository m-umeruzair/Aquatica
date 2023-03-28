const express = require("express");
const company = require("../models/Company");
const router = express.Router();


router.delete("/deleteCompany", async (req,res) =>{
    if(req.body.x == undefined){
      res.status(400).send("Delete field not found")
    }
    else {
        var del= req.body.x
      await company.deleteOne({companyName:del})
      res.status(200).send("Entry Deleted")

  }
  
  })


module.exports = router;