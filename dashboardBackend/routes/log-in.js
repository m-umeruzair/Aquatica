const express = require("express");
const Company = require("../models/Company");
const router = express.Router();
const bcrypt = require('bcryptjs');
const saltRounds= 10


async function validateUser(hash,pass) {
  var a= false
 await bcrypt
    .compare(pass, hash)
    .then(res => {
      console.log(res) // return true
      a=res
    })
    .catch(err => console.error(err.message))   
    console.log('qq'+a)
    return a     
}

router.get('/log-in',async(req,res)=>{
  var email=req.query.companyEmail;


       
  var a= await Company.find({'companyEmail':email})
    if(Object.keys(a).length!=0) {
    var pass= a[0].companyPassword

     if(await validateUser(pass,req.query.companyPassword)==true){
      res.status(200).send(a)
     }
     else {
      res.status(401).send()
     }
      }
    else{
        res.status(404).send()
       }

   
    // var a= await Company.find({'companyEmail':email})
    //    if(Object.keys(a).length!=0) {
    //     if(a[0].companyPassword==req.query.companyPassword){       
    //       res.status(200).send(a)
    //     }
    //     else{    
    //        res.status(401).send()
    //     }
    //    }
    //    else{
    //     res.status(404).send()
    //    }
    
})

module.exports = router;