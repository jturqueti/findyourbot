const express = require("express");
const router = express.Router();
const SolutionModel = require("../models/Solution");
const uploader = require("../config/cloudinary");
const requireAuth = require("../middlewares/requireAuth"); 

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

// -------------------------------------------------------
// Add Auth !!!!!!
router.post("/", uploader.single("logo"), (req, res, next) => {
  console.log(req.body)
    const newSolution = { ...req.body };
    
    if (req.file) {
      newSolution.logo = req.file.path;
    }
    SolutionModel.create(newSolution)
        .then((solution) => {
            res.status(201).json(solution); 
            })
        .catch(next);
  });
  
  // Add require auth + logo uploader !!!!!!!!!!!!!!! 
  router.patch(
    "/:id",
    uploader.single("logo"),
    (req, res, next) => {
      const solution = { ...req.body };
  
      SolutionModel.findById(req.params.id)
        .then((solutionFromDB) => {
          if (!solutionFromDB)
            return res.status(404).json({ message: "Item not found" });
  
        //   if (req.file) {
        //     solution.logo = req.file.secure_url;
        //   }
  
          SolutionModel.findByIdAndUpdate(req.params.id, solution, { new: true })
            .then((updatedSolution) => {
              return res.status(200).json(updatedSolution);
            })
            .catch(next);
        })
        .catch(next);
    }
  );
  
  // Add require auth !!!!!!!!!!!
  router.delete("/:id", (req, res, next) => {
    SolutionModel.findById(req.params.id)
      .then((solutionFromDB) => {
        if (!solutionFromDB) {
          return res.status(404).json({ message: "Solution not found !!!" });
        }
  
        SolutionModel.findByIdAndDelete(req.params.id)
          .then(() => {
            return res.sendStatus(204);
          })
          .catch(next);
      })
      .catch(next);
  });

// créer nouvelle solution
// modif solution
// delete solution




module.exports = router;
