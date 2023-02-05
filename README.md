# Helsinki City Bike App 

Helsinki City Bike App was created to help organize journey and station in Helsinki area.

## App features

<ul>
  <li> Display a table of Journey taken (with pagination, ordering per column feature)
  <li> Display a table of Station (with pagination, ordering per column feature)
  <li> Display information of each Station and show location in the map
  <li> Upload database in UI
</ul>
  
## A sneak peek of Helsinki City App!!

<p align="center">
  <img width="1924" alt="Screenshot 2023-02-05 at 20 45 04" src="https://user-images.githubusercontent.com/73076333/216838701-73b0c906-0383-439f-9426-8243a63a97e5.png">
<img width="1928" alt="Screenshot 2023-02-05 at 20 43 35" src="https://user-images.githubusercontent.com/73076333/216838707-d50a410a-1b70-4a32-a143-979563b981e9.png">
<img width="1214" alt="Screenshot 2023-02-05 at 20 45 12" src="https://user-images.githubusercontent.com/73076333/216838716-7064d36b-a7a7-40ec-b504-ce9db8d1a394.png">
<img src="https://user-images.githubusercontent.com/73076333/216838782-c07bb3f2-3d07-4f9f-8ca7-89c37b6b0007.png" width="1214"> 
  <img src="https://user-images.githubusercontent.com/73076333/216838788-94bac500-7fd4-432f-95a3-b797496e3258.png" width="1214"> 
</p> 

## Stack

#Backend: NodeJs, MySql

#Frontend: React JS

## Installation

1. Clone Helsinki Bike App to local:
```
$ git clone git@github.com:minhson0506/helsinki_city_bike.git
```
2. Open project in Visual Studio

4. Create database in local:
<li>	Connect to your database server as a root user on command line: mysql -u root -p / mysql -u root -p / mysql (command depends on you operating system/version installed) or using the MariaDB Client application (Windows) and create a database and a user with privileges on it:
<li>	CREATE DATABASE bikedb;
<li>	CREATE USER 'dbuser;
<li>	GRANT USAGE ON *.* TO 'dbuser';
<li>	GRANT ALL ON bikedb.* TO 'dbuser';
<li>	FLUSH PRIVILEGES;
exit

5. Import the tables and insert the data: mysql -u dbuser -p bikedb < db-starter.sql or copy-paste the contents of the script with command-line client (file is locate in backend folder)

5. Build and run project.
```
$ cd helsinki_city_bike_backend && npm start

$ cd helsinki_city_bike_frontkend && npm start
```



