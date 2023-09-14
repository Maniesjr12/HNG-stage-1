const mongoose = require("mongoose");

function mongooseConnect() {
  const connection_string =
    process.env.CONNECTION_STRING || "mongodb://localhost:27017/mydatabase";
  mongoose
    .connect(connection_string, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((err) => {
      console.error("Failed to connect to MongoDB", err);
    });
}

module.exports = {
  mongooseConnect,
};
