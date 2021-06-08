const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });
require("../config/dbConnection");
const ProspectModel = require("../models/Prospect");

const prospects = [
{
  channel: ["WhatsApp"],
  budget: ["Gratuit"],  
  clientType: ["TPE-PME"],
  email: "yoyo@gmail.com",
  companyName:"chez moimoi",
  firstName: "John-Didier",
  lastName: "Perroquet",
},
{
  channel: ["Facebook Messenger"],
  budget: ["€"],  
  clientType: ["Grande Entreprise"],
  email: "yaya@gmail.com",
  companyName:"chez mimi",
  firstName: "Marie-Thérèse",
  lastName: "Mamène",
}
]

ProspectModel.create(prospects)
  .then(prospectDocuments => {
    console.log(prospectDocuments);
  })
  .catch((err) => {
      console.log(err)
  });