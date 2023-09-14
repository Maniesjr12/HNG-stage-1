const express = require("express");
const http = require("http");
const { mongooseConnect } = require("./db/mongoose");
const app = require("./app");

const port = process.env.PORT || 7000;

const server = http.createServer(app);

async function loadServer() {
  await mongooseConnect();

  server.listen(port, () => {
    console.log(`listening on port ${port}`);
  });
}

loadServer();
