const mongoose = require("mongoose");

const foodDonationSchema = new mongoose.Schema({
  donorId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  foodDetails: {
    type: String,
    required: true
  },
  quantity: String,
  expiryDate: Date,
  status: {
    type: String,
    enum: ["pending", "collected", "delivered"],
    default: "pending"
  },
  assignedWorker: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("FoodDonation", foodDonationSchema);
