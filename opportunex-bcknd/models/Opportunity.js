const mongoose = require("mongoose");

const OpportunitySchema = new mongoose.Schema({
  title: String,
  company: String,
  type: String,
  duration: String,
  stipend: String,
  requiredSkills: [String],
  postedByRole: String,
  postedById: mongoose.Schema.Types.ObjectId,
  deadline: String
});

module.exports = mongoose.model("Opportunity", OpportunitySchema);
