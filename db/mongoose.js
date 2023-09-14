const mongoose = require("mongoose");

async function mongooseConnect() {
  const Mongo =
    process.env.CONNECTION_STRING || "mongodb://localhost:27017/mydatabase";

  await mongoose.connect(Mongo, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
});

mongoose.connection.on("error", (err) => {
  console.error("Failed to connect to MongoDB", err);
});

async function mongooseDisconnect() {
  await mongoose.disconnect();
}

module.exports = {
  mongooseConnect,
  mongooseDisconnect,
};
