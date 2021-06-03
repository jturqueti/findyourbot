const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });
require("../config/dbConnection");
const Solution = require("../models/Solution");

const solutions = [
{
    solutionName : "Clustaar", 
    creationDate: "2013", 
    channel: ["Webchat", "Facebook Messenger", "Bot vocal", "Autre"],
integration: [ "Zapier",  "Autre"],
  pricing: ["€€€"],
  additionalServices: true, 
  nlpProp: true, 
  multiLanguages: false, 
  languagesNLP: ["Français", "Anglais", "Allemand", "Espagnol", "Autre"],
  clientType: ["Grande Entreprise", "Administration publique"],
  contactName: "Jean Dubois",
  contactEmail: "jean.dubois@clustaar.com",
  companyURL: "http://clustaar.com",
},
];

Solution.create(solutions)
  .then(solutionDocuments => {
    console.log(solutionDocuments);
  })
  .catch((err) => {
      console.log(err)
  });