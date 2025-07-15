const FoodDonation = require("../models/FoodDonation");

exports.createDonation = async (req, res) => {
  try {
    const { foodDetails, quantity, expiryDate } = req.body;
    const newDonation = new FoodDonation({
      donorId: req.user.id,
      foodDetails,
      quantity,
      expiryDate
    });

    await newDonation.save();
    res.status(201).json({ message: "Food donation created", donation: newDonation });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getMyDonations = async (req, res) => {
  try {
    const donations = await FoodDonation.find({ donorId: req.user.id });
    res.json(donations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllDonations = async (req, res) => {
  try {
    const donations = await FoodDonation.find().populate("donorId").populate("assignedWorker");
    res.json(donations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateDonationStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status, assignedWorker } = req.body;

    const updated = await FoodDonation.findByIdAndUpdate(
      id,
      { status, assignedWorker },
      { new: true }
    );

    res.json({ message: "Donation updated", updated });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
