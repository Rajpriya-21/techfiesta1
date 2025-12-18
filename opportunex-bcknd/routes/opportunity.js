const express = require("express");
const Opportunity = require("../models/Opportunity");
const { verifyToken, authorize } = require("../middleware/auth");

const router = express.Router();

router.post(
  "/",
  verifyToken,
  authorize(["faculty", "industry"]),
  async (req, res) => {
    const opp = await Opportunity.create({
      ...req.body,
      postedByRole: req.user.role,
      postedById: req.user.id
    });
    res.json(opp);
  }
);

router.get("/", async (req, res) => {
  const opps = await Opportunity.find();
  res.json(opps);
});

module.exports = router;
