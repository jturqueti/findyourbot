const express = require("express");
const router = express.Router();
const SolutionModel = require("../models/Solution");
// const uploader = require("../config/cloudinary");
// const requireAuth = require("../middlewares/requireAuth"); 

// afficher les solutions 
router.get("/",(req, res, next)=>{
    SolutionModel.find()
    .then((solutionsFromDB)=>{
        res.status(200).json(solutionsFromDB);
    })
    .catch(next);
    })


router.get("/:id", (req, res, next)=>{
    SolutionModel.findById(req.params.id)
    .then((solutionFromDB)=>{
        res.status(200).json(solutionFromDB);
    })
    .catch(next);
})

// créer nouvelle solution
// modif solution
// delete solution

module.exports = router;
