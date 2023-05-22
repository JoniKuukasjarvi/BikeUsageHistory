# BikeUsageHistory


This application was created as a pre-assignment for Solita academy.
This application uses mySQL database, which I was not able to host anywhere. Meaning that if you want to use this create your own database, please.

installation guide:

you need node.js to start and run this application:
https://nodejs.org/en

After downloading the repository it should look like this in your folder

![image](https://github.com/JoniKuukasjarvi/BikeUsageHistory/assets/70267456/9d2be7a8-7127-4384-9002-db638943c2de)

You need to start by navigating to that same folder with your command terminal

![image](https://github.com/JoniKuukasjarvi/BikeUsageHistory/assets/70267456/ae2d12aa-aee1-4976-80c6-6ec298046726)

open both of these folders with 2 separate command terminals, and run commands "npm install" and "npm start" on both to get them up and running

The backend terminal should give you this message:

![image](https://github.com/JoniKuukasjarvi/BikeUsageHistory/assets/70267456/132974a7-4694-4c65-a969-8fe599a1a446)

and the frontend terminal allows you to choose the device you want to start the application with

![image](https://github.com/JoniKuukasjarvi/BikeUsageHistory/assets/70267456/79fabc02-f56d-409e-ac6c-69207e16be48)

I chose to open this application on web browser, and this it what it looks like

![image](https://github.com/JoniKuukasjarvi/BikeUsageHistory/assets/70267456/c4ad37d1-9698-4e39-ac93-56c20f223b6f)

The "search"-function is there to locate your bikestations

![image](https://github.com/JoniKuukasjarvi/BikeUsageHistory/assets/70267456/979cb5f4-ed05-4294-bcba-b47f922705fa)

"Bike trips"-view looks like this:

![image](https://github.com/JoniKuukasjarvi/BikeUsageHistory/assets/70267456/5276f87d-7747-4722-a94f-bd9bd4a9ec48)

And you can click on any of the objects to display more data about the selected bike trip

![image](https://github.com/JoniKuukasjarvi/BikeUsageHistory/assets/70267456/b456984b-d9a1-4ad4-9b32-698574efc6c8)

I had issues with the mobile version of this applcation, and it doesn't seem to be working.
Also I had difficulties with utf-8 characters (such as ä and ö) making it so that this application doesn't display them properly.

I had to spend quite a lot of time on this since there was quite a bit of data to handle. Needed to rebuild the databases and APIs quite often to prevent the database from exhausting itself. I also tried couple of cloud databases (including Google firebase, and MongoDB) and those had limitations with read, write and data handling meaning the best option for this bigger scale database was my own local SQL database.
