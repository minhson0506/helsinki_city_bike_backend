"use strict";
// journey file route

const express = require("express");

const router = express.Router();

const { journey_list_get, journey_post, delete_journey_by_id } = require("../controllers/journeyController");

const multer = require("multer");
const upload = multer({ dest: "./uploads/" });

router
  .post("/", upload.single("file"), journey_post)
  .get("/", journey_list_get);

module.exports = router;
