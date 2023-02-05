CREATE TABLE IF NOT EXISTS `Journey` (
    `Id` int NOT NULL AUTO_INCREMENT,
    `Departure` datetime,
    `Return_` datetime,
    `Departure_station` varchar(255),    
    `Departure_station_name` varchar(255),
    `Return_station` varchar(255),
    `Return_station_name` varchar(255),
    `Distance` int,
    `Duration` int,
    PRIMARY KEY (Id)
);

CREATE TABLE IF NOT EXISTS `Station` (
    `Fid` int NOT NULL AUTO_INCREMENT,
    `Id` varchar(255),
    `Nimi` varchar(255),
    `Namn` varchar(255),
    `Name` varchar(255),
    `Osoite` varchar(255),
    `Address` varchar(255),
    `Kaupunki` varchar(255),
    `Stad` varchar(255),
    `Operator` varchar(255),
    `Lapasiteet` int,
    `x` float,
    `y` float,
    PRIMARY KEY (Fid)
);