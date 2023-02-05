"use strict";

const express = require("express");
var cors = require('cors')
const app = express();
const port = 3001;

const journeyFile = require("./routers/journeyRoute");
const stationFile = require("./routers/stationRoute.js");

app.use(cors())
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

app.use("/journey", journeyFile);
app.use("/station", stationFile);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
