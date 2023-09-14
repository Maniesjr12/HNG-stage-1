const express = require("express");
const app = express();

const personRoute = require("./routes/person/person.routes");

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

app.use("/api", personRoute);

module.exports = app;
