const express = require("express");
const { mongooseConnect } = require("./db/mongoose");
const app = express();
const port = process.env.PORT || 7000;

const personRoute = require("./routes/person/person.routes");

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

app.use("/api", personRoute);

app.get("/", (req, res) => {
  res.send({
    welcome: "HIIII!!!",
  });
});

app.get("/api", (req, res) => {
  const slack_name = req.query.slack_name;
  const track = req.query.track;

  if (!slack_name || !track) {
    return res
      .status(400)
      .send({ error: "Both slack_name and track parameters are required!" });
  }

  const currentDate = new Date();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDay = days[currentDate.getUTCDay()];
  const utcTime = new Date().toISOString().slice(0, -5) + "Z";

  const response = {
    slack_name,
    current_day: currentDay,
    utc_time: utcTime,
    track,
    github_file_url: "https://github.com/Maniesjr12/HNG-stage-1",
    github_repo_url: "https://github.com/username/repo",
    status_code: 200,
  };

  res.json(response);
});

app.get("*", (req, res) => {
  res.status(404).json({
    message: "Not Found!",
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
  mongooseConnect();
});
