const Beggar = require("../models/Beggar");

exports.registerBeggar = async (req, res) => {
  try {
    const { name, isIdentified, documents, healthStatus } = req.body;
    const newBeggar = new Beggar({
      name,
      isIdentified,
      documents,
      healthStatus,
      assignedWorker: req.user.id
    });

    await newBeggar.save();
    res.status(201).json({ message: "Beggar registered", beggar: newBeggar });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateBeggarStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { currentStatus } = req.body;

    const updated = await Beggar.findByIdAndUpdate(id, { currentStatus }, { new: true });
    res.json({ message: "Status updated", updated });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllBeggars = async (req, res) => {
  try {
    const beggars = await Beggar.find().populate("assignedWorker");
    res.json(beggars);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
