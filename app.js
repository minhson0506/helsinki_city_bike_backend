"use strict";

const express = require("express");
const app = express();
const port = 3001;

const journeyFile = require("./routers/journeyRoute");
const stationFile = require("./routers/stationRoute.js");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/info", (req, res) => {
  const info = {
    name: "Son Dang",
    birthdate: "1986-06-05",
    weight: 55,
  };
  res.json(info);
});

app.use("/journeyFile", journeyFile);
app.use("/stationFile", stationFile);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
