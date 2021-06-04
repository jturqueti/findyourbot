const express = require("express");
const router = express.Router();
const ProspectModel = require("../models/Prospect");


router.post("/",  (req, res, next) => {
    const newProspect = { ...req.body };
    
    ProspectModel.create(newProspect)
        .then((prospect) => {
            res.status(201).json(prospect); 
            })
        .catch(next);
  });



module.exports = router;