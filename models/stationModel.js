"use strict";
const pool = require("../database/db");
const promisePool = pool.promise();

const getAllStations = async () => {
  try {
    const [rows] = await promisePool.query("SELECT * FROM Station");
    console.log("data count is ", rows.length);
    return rows;
  } catch (e) {
    console.error("error", e.message);
  }
};

const insertStations = async (stations) => {
  try {
    let itemQuery = "";
    stations.map((station) => {
      if (itemQuery != "")
        itemQuery += `,(${parseInt(station[0])}, \'${station[1]}\', \'${
          station[2]
        }\', \'${station[3]}\', \'${station[4]}\', \'${station[5]}\', \'${
          station[6]
        }\', \'${station[7]}\', \'${station[8]}\', \'${
          station[9]
        }\', \'${parseInt(station[10])}\', ${parseFloat(
          station[11]
        )}, ${parseFloat(station[12])})`;
      else
        itemQuery += `(${parseInt(station[0])}, \'${station[1]}\', \'${
          station[2]
        }\', \'${station[3]}\', \'${station[4]}\', \'${station[5]}\', \'${
          station[6]
        }\', \'${station[7]}\', \'${station[8]}\', \'${
          station[9]
        }\', \'${parseInt(station[10])}\', ${parseFloat(
          station[11]
        )}, ${parseFloat(station[12])})`;
      return itemQuery;
    });
    const [row] = await promisePool.execute(
      `INSERT INTO Station (Fid, Id, Nimi, Namn, Name, Osoite, Address, Kaupunki, Stad, Operator, Lapasiteet, x, y) VALUES ${itemQuery}`
    );
  } catch (e) {
    console.error(e.message);
  }
};

module.exports = {
  getAllStations,
  insertStations,
};
