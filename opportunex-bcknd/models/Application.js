const mongoose = require("mongoose");

const ApplicationSchema = new mongoose.Schema({
  studentId: mongoose.Schema.Types.ObjectId,
  opportunityId: mongoose.Schema.Types.ObjectId,
  fitScore: Number,
  status: { type: String, default: "applied" }
});

module.exports = mongoose.model("Application", ApplicationSchema);
