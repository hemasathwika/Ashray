const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: { type: String, enum: ["donor", "worker", "admin", "shelter"], default: "donor" },
  location: String,
});

module.exports = mongoose.model("User", userSchema);
