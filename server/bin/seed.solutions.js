const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });
require("../config/dbConnection");
const Solution = require("../models/Solution");

const solutions = [
  {
    solutionName: "Clustaar",
    creationDate: "2013",
    originCountry: "France",
    channel: ["Webchat", "Facebook Messenger", "Bot vocal", "Autre"],
    integration: ["Zapier", "Autre"],
    pricing: ["€€€"],
    additionalServices: true,
    nlpProp: true,
    multiLanguages: false,
    languagesNLP: ["Français", "Anglais", "Allemand", "Espagnol", "Autre"],
    clientType: ["Grande Entreprise", "Administration publique"],
    contactName: "Jean Dubois",
    contactEmail: "jean.dubois@clustaar.com",
    companyURL: "http://clustaar.com",
    logo: "https://clustaar.com/wp-content/uploads/2020/05/Logo-Conv-AI-Vert-1.png"
  },
  {
    solutionName: "Dialog Flow",
    creationDate: "2010",
    originCountry: "Etat-Unis",
    channel: ["Webchat", "Facebook Messenger", "Bot vocal", "Autre"],
    integration: ["Autre"],
    pricing: ["Gratuit"],
    additionalServices: false,
    nlpProp: true,
    multiLanguages: false,
    languagesNLP: ["Français", "Anglais", "Allemand", "Espagnol", "Autre"],
    clientType: ["Particulier", "TPE-PME", "Grande Entreprise"],
    companyURL: "https://dialogflow.cloud.google.com/",
    logo: "https://www.pikpng.com/pngl/m/252-2520835_dialogflow-nodejs-client-app-google-dialogflow-icon-transparent.png"
  },
  {
    solutionName: "Landbot",
    creationDate: "2010",
    originCountry: "Espagne",
    channel: [
      "Webchat",
      "Facebook Messenger",
      "WhatsApp",
      "Bot vocal",
      "Autre",
    ],
    integration: ["Salesforce", "Mailchimp", "Zapier", "Autre"],
    pricing: ["€"],
    additionalServices: false,
    languagesNLP: ["Français", "Anglais", "Allemand", "Espagnol", "Autre"],
    clientType: ["Particulier", "TPE-PME"],
    companyURL: "https://landbot.io/",
  },
  {
    solutionName: "DYDU",
    originCountry: "France",
    channel: [
      "Webchat",
      "Facebook Messenger",
      "WhatsApp",
      "Bot vocal",
      "Autre",
    ],
    integration: ["Zapier", "Autre"],
    pricing: ["€€€"],
    additionalServices: true,
    languagesNLP: ["Français", "Anglais", "Allemand", "Espagnol", "Autre"],
    clientType: ["Grande Entreprise", "Administration publique"],
    companyURL: "https://www.dydu.ai/",
    logo: "https://www.dydu.ai/wp-content/themes/dydu/img/dydu.svg"
  },
  {
    solutionName: "Inbenta",
    originCountry: "Espagne",
    channel: [
      "Webchat",
      "Facebook Messenger",
      "WhatsApp",
      "Bot vocal",
      "Autre",
    ],
    integration: ["Zapier", "Autre"],
    pricing: ["€€€"],
    additionalServices: true,
    languagesNLP: ["Français", "Anglais", "Allemand", "Espagnol", "Autre"],
    clientType: ["Grande Entreprise", "Administration publique"],
    companyURL: "https://www.inbenta.com/fr/",
    logo: "https://www.inbenta.com/wp-content/themes/inbentatwo/img/puzzle/chatbot.svg"
  },
  {
    solutionName: "Oracle Digital Assistant",
    originCountry: "US",
    channel: [
      "Webchat",
      "Facebook Messenger",
      "WhatsApp",
      "Bot vocal",
      "Autre",
    ],
    integration: ["Zapier", "Autre"],
    pricing: ["€€€"],
    additionalServices: true,
    languagesNLP: ["Français", "Anglais", "Allemand", "Espagnol", "Autre"],
    clientType: ["Grande Entreprise", "Administration publique"],
    companyURL: "https://www.oracle.com/fr/chatbots/",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Oracle_logo.svg/995px-Oracle_logo.svg.png"
  },
  {
    solutionName: "Amazon AWS",
    originCountry: "US",
    channel: [
      "Webchat",
      "WhatsApp",
      "Autre",
    ],
    integration: ["Zapier", "Salesforce", "Autre"],
    pricing: ["€€"],
    additionalServices: true,
    languagesNLP: ["Français", "Anglais", "Allemand", "Espagnol", "Autre"],
    clientType: ["TPE-PME", "Grande Entreprise"],
    companyURL: "https://aws.amazon.com/fr/chatbot/",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/AWS_Simple_Icons_AWS_Cloud.svg/768px-AWS_Simple_Icons_AWS_Cloud.svg.png"
  },
  {
    solutionName: "Botsify",
    originCountry: "US",
    channel: [
      "Webchat",
      "Facebook Messenger",
      "WhatsApp",
    ],
    integration: ["Autre"],
    pricing: ["€€"],
    additionalServices: true,
    languagesNLP: ["Français", "Anglais", "Allemand", "Espagnol", "Autre"],
    clientType: ["Particulier", "TPE-PME", "Grande Entreprise"],
    companyURL: "https://botsify.com/",
    logo: "https://miro.medium.com/max/625/1*xKz_Kjmrx522jBrSHcUN6w.png"
  },
  {
    solutionName: "Flow xo",
    originCountry: "US",
    channel: [
      "Webchat",
      "Facebook Messenger",
      "WhatsApp",
      "Autre",
    ],
    integration: ["Salesforce", "Mailchimp", "Zapier", "Autre"],
    pricing: ["€"],
    additionalServices: true,
    languagesNLP: ["Français", "Anglais", "Allemand", "Espagnol", "Autre"],
    clientType: ["TPE-PME", "Grande Entreprise"],
    companyURL: "https://flowxo.com/",
    logo: "https://miro.medium.com/max/419/1*6RNXDaSG-FbkRM0zrsWXUQ.png"
  },
  {
    solutionName: "Chatfuel",
    originCountry: "Russie",
    channel: [
      "Webchat",
      "Facebook Messenger",
    ],
    integration: ["Autre"],
    pricing: ["Gratuit"],
    additionalServices: true,
    languagesNLP: ["Anglais", "Allemand", "Autre"],
    clientType: ["Particulier", "TPE-PME", "Grande Entreprise"],
    companyURL: "https://chatfuel.com/",
    logo: "https://miro.medium.com/max/389/1*VvhNUq-RVSgJh-PwUcq-kQ.png"
  },
  {
    solutionName: "Hubspot",
    originCountry: "US",
    channel: [
      "Webchat",
      "Facebook Messenger",
      "Autre"
    ],
    integration: ["Autre"],
    pricing: ["€€€"],
    additionalServices: true,
    languagesNLP: ["Anglais", "Allemand", "Espagnol", "Autre"],
    clientType: ["TPE-PME", "Grande Entreprise"],
    companyURL: "https://www.hubspot.com/",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/HubSpot_Logo.svg/159px-HubSpot_Logo.svg.png"
  },
];

Solution.create(solutions)
  .then((solutionDocuments) => {
    console.log(solutionDocuments);
  })
  .catch((err) => {
    console.log(err);
  });
