const express = require("express");
const Company = require("../models/Company");
const router = express.Router();
const bcrypt = require('bcryptjs');
const saltRounds= 10
router.post('/sign-up', async(req,res)=>{
   var hashedPassword;
    await bcrypt.genSalt(saltRounds).then(salt=>{
       return bcrypt.hash(req.body.companyPassword, salt)}).then(hash=>{
            hashedPassword = hash
           
        });

const company= new Company({
    
    companyName: req.body.companyName,
    companyEmail: req.body.companyEmail,
    companyNumber: req.body.companyNumber,
    companyPassword: hashedPassword,
    companyAddress:req.body.companyAddress,
    companyRegistration:req.body.companyRegistration,
    companyTotalSales:req.body.companyTotalSales
})
const save= await company.save()
res.status(200).send("Object created")
  
})

module.exports = router;