const mongoose = require("mongoose");

const beggarSchema = new mongoose.Schema({
  name: String,
  isIdentified: Boolean,
  documents: {
    aadhar: String,
    pan: String
  },
  healthStatus: String,
  assignedWorker: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  currentStatus: {
    type: String,
    enum: ["unverified", "hospitalized", "sheltered", "treated"],
    default: "unverified"
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Beggar", beggarSchema);
