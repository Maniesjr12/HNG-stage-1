const Person = require("../../db/person");

exports.createPerson = async (req, res) => {
  try {
    const person = new Person(req.body);
    await person.save();
    res.status(201).json(person);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getPerson = async (req, res) => {
  try {
    const person = await Person.findById(req.params.id);
    if (!person) {
      return res.status(404).json({ error: "Person not found" });
    }
    res.json(person);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updatePerson = async (req, res) => {
  try {
    const person = await Person.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!person) {
      return res.status(404).json({ error: "Person not found" });
    }
    res.json(person);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deletePerson = async (req, res) => {
  try {
    const person = await Person.findByIdAndRemove(req.params.id);
    if (!person) {
      return res.status(404).json({ error: "Person not found" });
    }
    res.json({ message: "Person deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
