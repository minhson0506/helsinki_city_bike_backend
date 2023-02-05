"use strict";

const pool = require("../database/db");
const promisePool = pool.promise();

const fs = require("fs");
const readline = require("readline");

const {
  getAllJourneys,
  insertJourney,
  insertJourneys,
} = require("../models/journeyModel");

const journey_list_get = async (req, res) => {
  try {
    const journeys = await getAllJourneys();
    res.json(journeys);
  } catch (error) {
    console.log("error when get all journeys");
  }
};

const journey_post = (req, res) => {
  console.log("post file");
  res.send("post file");
  console.log("start to read file");
  console.log("file is ", req.file);

  var index = 0;
  var array = [];
  var read = readline.createInterface({
    input: fs.createReadStream(req.file.path),
  });

  read
    .on("line", function (text) {
      index++;
      if (index > 1) {
        let journey = text.split(",");
        journey = journey.map((element) => {
          if (element.indexOf("'") > -1) {
            return element.replace("'", "''");
          } else return element;
        });
        if (parseInt(journey[6]) > 10 && parseInt(journey[7]) > 10) {
          array.push(journey);
        }
      }
      if (index % 5000 == 0) {
        insertJourneys(array);
        array = [];
      }
    })
    .on("close", () => {
      if (array.length != 0) insertJourneys(array);
    });
};

module.exports = {
  journey_list_get,
  journey_post,
};
