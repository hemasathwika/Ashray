const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const {
  createDonation,
  getMyDonations,
  getAllDonations,
  updateDonationStatus
} = require("../controllers/foodController");

// Donor creates a food donation
router.post("/create", auth, createDonation);

// Donor views own donations
router.get("/my", auth, getMyDonations);

// Admin views all donations
router.get("/all", auth, getAllDonations);

// Worker/Admin updates donation status
router.put("/update/:id", auth, updateDonationStatus);

module.exports = router;
