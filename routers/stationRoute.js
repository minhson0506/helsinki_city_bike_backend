"use strict";
// journey file route

const express = require("express");

const router = express.Router();

const {
  station_list_get,
  station_post,
} = require("../controllers/stationController");

const multer = require("multer");
const upload = multer({ dest: "./uploads/" });

router
  .post("/", upload.single("file"), station_post)
  .get("/", station_list_get);

module.exports = router;
