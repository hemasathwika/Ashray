const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const {
  registerBeggar,
  updateBeggarStatus,
  getAllBeggars
} = require("../controllers/beggarController");

// Worker registers a beggar
router.post("/register", auth, registerBeggar);

// Admin updates status
router.put("/status/:id", auth, updateBeggarStatus);

// Admin views all
router.get("/all", auth, getAllBeggars);

module.exports = router;
