const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const prospectSchema = new Schema({
  channel: [
    {
      type: String,
      enum: ["Webchat", "Facebook Messenger", "WhatsApp", "Microsoft Teams", "Bot vocal", "Autre"],
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

  email: { type: String, required: true },
  companyName: String,
  firstName: String,
  lastName: String,
});

const ProspectModel = mongoose.model("Prospect", prospectSchema);

module.exports = ProspectModel;