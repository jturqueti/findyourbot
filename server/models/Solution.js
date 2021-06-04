const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const solutionSchema = new Schema({
    solutionName : String, 
    creationDate: String, 
    originCountry: String,
    channel: [
        {
          type: String,
          enum: ["Webchat", "Facebook Messenger", "WhatsApp", "Microsoft Teams", "Bot vocal", "Autre"],
        },
      ],
integration: [
    {
      type: String,
      enum: ["Salesforce", "Mailchimp", "Zapier", "Autre"],
    },
  ],
  pricing: [
    {
      type: String,
      enum: ["Gratuit", "€", "€€", "€€€"],
    },
  ],
  additionalServices: Boolean, 
  nlpProp: Boolean, 
  multiLanguages: Boolean, 
  languagesNLP: [
    {
      type: String,
      enum: ["Français", "Anglais", "Allemand", "Espagnol", "Autre"],
    },
  ],
  clientType: [
    {
      type: String,
      enum: ["Particulier", "TPE-PME", "Grande Entreprise", "Administration publique"],
    },
  ],
  contactName: String,
  contactEmail: String,
  companyURL: String,
  logo: {
    type: String,
    default:
      "https://cdn1.iconfinder.com/data/icons/gardening-filled-line/614/1935_-_Growing_Plant-512.png",
  },
});




const Solution = mongoose.model("Solution", solutionSchema);

module.exports = Solution;