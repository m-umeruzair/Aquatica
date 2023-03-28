const express = require("express");
const Company = require("../models/Company");
const router = express.Router();



router.get('/readCompany', (req,res)=>{
    var id= req.query.companyId

    var a= Company.find({'_id':id})
    if(Object.keys(a).length!=0) {
        res.status(200).send(a);
    }
    else{
        res.sendStatus(404).end;
    }
})

module.exports = router;