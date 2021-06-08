const express = require("express");
const router = express.Router();
const ProspectModel = require("../models/Prospect");

router.get("/", (req, res, next) => {
    ProspectModel.find()
      .then((solutionsFromDB) => {
        res.status(200).json(solutionsFromDB);
      })
      .catch(next);
  });
  
router.get("/:id", (req, res, next) => {
ProspectModel.findById(req.params.id)
    .then((solutionFromDB) => {
    res.status(200).json(solutionFromDB);
    })
    .catch(next);
});

router.post("/",  (req, res, next) => {
    const newProspect = { ...req.body };
    ProspectModel.create(newProspect)
        .then((prospect) => {
            res.status(201).json(prospect); 
            })
        .catch(next);
});



module.exports = router;