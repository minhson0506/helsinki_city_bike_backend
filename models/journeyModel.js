"use strict";
const pool = require("../database/db");
const promisePool = pool.promise();

const getAllJourneys = async () => {
  try {
    const [rows] = await promisePool.query("SELECT * FROM Journey");
    console.log("data count is ", rows.length);
    return rows;
  } catch (e) {
    console.error("error", e.message);
  }
};

const insertJourneys = async (journeys) => {
  try {
    let itemQuery = "";
    const item = journeys.map((journey) => {
      if (itemQuery != "")
        itemQuery += `,(\'${journey[0]}\', \'${journey[1]}\', \'${
          journey[2]
        }\', \'${journey[4]}\', ${parseInt(journey[6])}, ${parseInt(
          journey[7]
        )})`;
      else
        itemQuery += `(\'${journey[0]}\', \'${journey[1]}\', \'${
          journey[2]
        }\', \'${journey[4]}\', ${parseInt(journey[6])}, ${parseInt(
          journey[7]
        )})`;
      return itemQuery;
    });
    const [row] = await promisePool.execute(
      `INSERT INTO Journey (Departure, Return_, Departure_station, Return_station, Distance, Duration) VALUES ${itemQuery}`
    );
  } catch (e) {
    console.error(e.message);
  }
};

module.exports = {
  getAllJourneys,
  insertJourneys,
};
