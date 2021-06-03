const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const prospectSchema = new Schema({
    languagesNLP: [
        {
          type: String,
          enum: ["Français", "Anglais", "Allemand", "Espagnol", "Autre"],
        },
      ],
    budget: [
        {
          type: String,
          enum: ["Gratuit", "€", "€€", "€€€"],
        },
      ],  
      clientType: [
        {
          type: String,
          enum: ["Particulier", "TPE-PME", "Grande Entreprise", "Administration publique"],
        },
      ],

  needServices: Boolean, 
  email: { type: String, required: true },
  companyName:String,
  lastName: String,
  firstName: String,
});

const Prospect = mongoose.model("Prospect", prospectSchema);

module.exports = Prospect;