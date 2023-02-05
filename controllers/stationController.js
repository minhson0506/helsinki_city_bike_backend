"use strict";

const pool = require("../database/db");
const promisePool = pool.promise();

const fs = require("fs");
const readline = require("readline");

const {
  getAllStations,
  insertStations,
  getStation,
} = require("../models/stationModel");

const station_list_get = async (req, res) => {
  const stations = await getAllStations();
  res.json(stations);
};

const station_post = (req, res) => {
  console.log("post file station");
  res.send("post file station");
  console.log("file is ", req.file);

  let index = 0;
  let array = [];
  let read = readline.createInterface({
    input: fs.createReadStream(req.file.path),
  });

  read
    .on("line", function (text) {
      index++;
      if (index > 1) {
        let station = text.split(",");
        station = station.map((element) => {
          if (element.indexOf("'") > -1) {
            return element.replace("'", "''");
          } else return element;
        });
        if (
          parseInt(station[0]) > 0 &&
          parseInt(station[10]) > 0 &&
          !parseFloat(station[11]).isNaN &&
          !parseFloat(station[12]).isNaN
        ) {
          array.push(station);
        }
      }
      if (index % 5000 == 0) {
        insertStations(array);
        array = [];
      }
    })
    .on("close", () => {
      if (array.length != 0) {
        insertStations(array);
      }
    });
};

const station_by_id = async (req, res) => {
  const station = await getStation(req.params.id);
  console.log("reponse station", station);
  res.json(station);
};

module.exports = {
  station_list_get,
  station_post,
  station_by_id,
};
