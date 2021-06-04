const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });
require("../config/dbConnection");
const Solution = require("../models/Solution");

const solutions = [
{
    solutionName : "Clustaar", 
    creationDate: "2013", 
    originCountry: "France",
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
{
  solutionName : "Dialog Flow", 
  creationDate: "2010", 
  originCountry: "Etat-Unis",
  channel: ["Webchat", "Facebook Messenger", "Bot vocal", "Autre"],
integration: [ "Autre"],
pricing: ["gratuit"],
additionalServices: false, 
nlpProp: true, 
multiLanguages: false, 
languagesNLP: ["Français", "Anglais", "Allemand", "Espagnol", "Autre"],
clientType: ["Particulier", "TPE-PME", "Grande Entreprise"],
companyURL: "https://dialogflow.cloud.google.com/",
},
{
  solutionName : "Landbot", 
  creationDate: "2010", 
  originCountry: "Espagne",
  channel: ["Webchat", "Facebook Messenger", "WhatsApp", "Bot vocal", "Autre"],
integration: ["Salesforce", "Mailchimp", "Zapier", "Autre"],
pricing: ["€"],
additionalServices: false,  
languagesNLP: ["Français", "Anglais", "Allemand", "Espagnol", "Autre"],
clientType: ["Particulier", "TPE-PME"],
companyURL: "https://landbot.io/",
},
{
  solutionName : "Landbot", 
  creationDate: "2010", 
  originCountry: "Espagne",
  channel: ["Webchat", "Facebook Messenger", "WhatsApp", "Bot vocal", "Autre"],
integration: ["Salesforce", "Mailchimp", "Zapier", "Autre"],
pricing: ["€"],
additionalServices: false,  
languagesNLP: ["Français", "Anglais", "Allemand", "Espagnol", "Autre"],
clientType: ["Particulier", "TPE-PME"],
companyURL: "https://landbot.io/",
},
{
  solutionName : "DYDU",  
  originCountry: "France",
  channel: ["Webchat", "Facebook Messenger", "WhatsApp", "Bot vocal", "Autre"],
integration: [ "Zapier", "Autre"],
pricing: ["€€€"],
additionalServices: true,  
languagesNLP: ["Français", "Anglais", "Allemand", "Espagnol", "Autre"],
clientType: ["Grande Entreprise", "Administration publique"],
companyURL: "https://www.dydu.ai/",
},
{
  solutionName : "Inbenta",  
  originCountry: "Espagne",
  channel: ["Webchat", "Facebook Messenger", "WhatsApp", "Bot vocal", "Autre"],
integration: [ "Zapier", "Autre"],
pricing: ["€€€"],
additionalServices: true,  
languagesNLP: ["Français", "Anglais", "Allemand", "Espagnol", "Autre"],
clientType: ["Grande Entreprise", "Administration publique"],
companyURL: "https://www.inbenta.com/fr/",
},
];

Solution.create(solutions)
  .then(solutionDocuments => {
    console.log(solutionDocuments);
  })
  .catch((err) => {
      console.log(err)
  });