const mongoose = require("mongoose");

const StudentProfileSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  branch: String,
  year: String,
  cgpa: Number,
  skills: [String],
  github: String,
  projects: [String],
  certifications: [String],
  profileCompletion: Number
});

module.exports = mongoose.model("StudentProfile", StudentProfileSchema);
