"use strict";
const pool = require("../database/db");
const promisePool = pool.promise();

const getAllStations = async () => {
  try {
    const [rows] = await promisePool.query("SELECT * FROM Station");
    return rows;
  } catch (e) {
    console.error("error", e.message);
  }
};

const insertStations = async (stations) => {
  try {
    const [table] = await promisePool.execute(
      `CREATE TABLE IF NOT EXISTS Station (
        Fid int NOT NULL AUTO_INCREMENT,
        Id varchar(255),
        Nimi varchar(255),
        Namn varchar(255),
        Name varchar(255),
        Osoite varchar(255),
        Address varchar(255),
        Kaupunki varchar(255),
        Stad varchar(255),
        Operator varchar(255),
        Lapasiteet int,
        x float,
        y float,
        PRIMARY KEY (Fid));`
    );
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

const getStation = async (id) => {
  try {
    const [rows] = await promisePool.query(
      "SELECT * FROM Station WHERE Id= ?",
      [id]
    );
    return rows;
  } catch (e) {
    console.error("error", e.message);
  }
};

module.exports = {
  getAllStations,
  insertStations,
  getStation,
};
