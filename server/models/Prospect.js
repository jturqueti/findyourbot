const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const prospectSchema = new Schema({
  channel: String,
  pricing:String,  
  clientType: String,
  email: { type: String, required: true },
  companyName: String,
  firstName: String,
  lastName: String,
});

const ProspectModel = mongoose.model("Prospect", prospectSchema);

module.exports = ProspectModel;