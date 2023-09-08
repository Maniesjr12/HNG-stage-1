const express = require("express");
const app = express();
const port = 7000;

app.get("/api", (req, res) => {
  const slack_name = req.query.slack_name;
  const track = req.query.track;

  if (!slack_name || !track) {
    return res
      .status(400)
      .json({ error: "Both slack_name and track parameters are required!" });
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
  const utcTime = currentDate.toISOString();

  const response = {
    slack_name,
    current_day: currentDay,
    utc_time: utcTime,
    track,
    github_file_url: "https://github.com/username/repo/blob/main/server.js",
    github_repo_url: "https://github.com/username/repo",
    status_code: 200,
  };

  res.json(response);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
