const express = require("express");
const {
  getPerson,
  createPerson,
  updatePerson,
  deletePerson,
} = require("./person.controller");

const router = express.Router();

router.get("/persons/:id", getPerson);

router.put("/persons/:id", updatePerson);

router.post("/persons", createPerson);

router.delete("/persons/:id", deletePerson);

module.exports = router;
