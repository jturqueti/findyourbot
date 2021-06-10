const express = require("express");
const router = express.Router();
const ProspectModel = require("../models/Prospect");
const SolutionModel = require ("../models/Solution")


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
  console.log(req.body)
    const newProspect = { ...req.body };
    ProspectModel.create(newProspect)
        .then((infoprospect) => {
          SolutionModel.find({channel: req.body.channel,  pricing: req.body.pricing, clientType: req.body.clientType})
          .then((solutionFromDB) => {
            console.log(solutionFromDB)
              res.json(solutionFromDB);
            }
          );
            })
        
        .catch(next);
});

router.post("/", (req, res, next) => {
  console.log(req.body);
  console.log(req.body.channel);
  SolutionModel.find({channel: req.body.channel,  pricing: req.body.pricing, clientType: req.body.clientType})
  .then((solutionFromDB) => {
    console.log(solutionFromDB)
      res.json(solutionFromDB);
    }
  );
});


router.delete("/:id", (req, res, next) => {
  ProspectModel.findById(req.params.id)
    .then((solutionFromDB) => {
      if (!solutionFromDB) {
        return res.status(404).json({ message: "Solution not found !!!" });
      }

      ProspectModel.findByIdAndDelete(req.params.id)
        .then(() => {
          return res.sendStatus(204);
        })
        .catch(next);
    })
    .catch(next);
});


module.exports = router;