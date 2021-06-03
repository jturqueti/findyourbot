const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });
require("../config/dbConnection");
const Prospect = require("../models/Prospect");

const prospects = [
{
languagesNLP: ["Français"],
budget: ["Gratuit"],  
  clientType: ["TPE-PME"],
needServices: false, 
email: "yoyo@gmail.com",
companyName:"chez moimoi",
lastName: "Jacquo",
firstName: "Dumont",
}
]

Prospect.create(prospects)
  .then(prospectDocuments => {
    console.log(prospectDocuments);
  })
  .catch((err) => {
      console.log(err)
  });