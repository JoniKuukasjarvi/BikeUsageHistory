# BikeUsageHistory

Demonstrating the application on a video.
https://youtu.be/ohm5R5sOuuQ

This application was created as a pre-assignment for Solita academy.
Application uses mySQL database.

installation guide:


you need node.js to start and run this application:
https://nodejs.org/en

MySQL database is also needed.
https://dev.mysql.com/downloads/mysql/


After downloading the repository it should look like this in your folder

![image](https://github.com/JoniKuukasjarvi/BikeUsageHistory/assets/70267456/9d2be7a8-7127-4384-9002-db638943c2de)

You need to start by navigating to that same folder with your command terminal

![image](https://github.com/JoniKuukasjarvi/BikeUsageHistory/assets/70267456/ae2d12aa-aee1-4976-80c6-6ec298046726)

open both of these folders with 2 separate command terminals, and run commands "npm install" and "npm start" on both to get them up and running

The backend terminal should give you this message:

![image](https://github.com/JoniKuukasjarvi/BikeUsageHistory/assets/70267456/132974a7-4694-4c65-a969-8fe599a1a446)

and the frontend terminal allows you to choose the device you want to start the application with

![image](https://github.com/JoniKuukasjarvi/BikeUsageHistory/assets/70267456/79fabc02-f56d-409e-ac6c-69207e16be48)

This is what the application looks like on a web browser.

![image](https://github.com/JoniKuukasjarvi/BikeUsageHistory/assets/70267456/c4ad37d1-9698-4e39-ac93-56c20f223b6f)

The "search"-function is there to locate your bikestations

![image](https://github.com/JoniKuukasjarvi/BikeUsageHistory/assets/70267456/979cb5f4-ed05-4294-bcba-b47f922705fa)

"Bike trips"-view looks like this:

![image](https://github.com/JoniKuukasjarvi/BikeUsageHistory/assets/70267456/5276f87d-7747-4722-a94f-bd9bd4a9ec48)

And you can click on any of the objects to display more data about the selected bike trip

![image](https://github.com/JoniKuukasjarvi/BikeUsageHistory/assets/70267456/b456984b-d9a1-4ad4-9b32-698574efc6c8)

Easiest way to create the database that was used on this application is to run this command:

_ CREATE TABLE biketrips (
    id INT AUTO_INCREMENT PRIMARY KEY,
    departure_time DATETIME,
    return_time DATETIME,
    departure_station_id INT,
    departure_station_name VARCHAR(255),
    return_station_id INT,
    return_station_name VARCHAR(255),
    covered_distance FLOAT,
    duration TIME
); _

And then you can use "Data import Wizard" to import the data into the database

![image](https://github.com/JoniKuukasjarvi/BikeUsageHistory/assets/70267456/f1cc5aad-7131-4b27-a799-e78a9d6865cf)
























