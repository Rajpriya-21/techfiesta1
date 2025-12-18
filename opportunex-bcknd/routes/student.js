const express = require("express");
const StudentProfile = require("../models/StudentProfile");
const { verifyToken, authorize } = require("../middleware/auth");

const router = express.Router();

router.post("/profile", verifyToken, authorize(["student"]), async (req, res) => {
  const profile = await StudentProfile.create({
    ...req.body,
    userId: req.user.id
  });
  res.json(profile);
});

router.get("/profile", verifyToken, authorize(["student"]), async (req, res) => {
  const profile = await StudentProfile.findOne({ userId: req.user.id });
  res.json(profile);
});

module.exports = router;
