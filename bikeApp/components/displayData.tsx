import { useState, useEffect } from 'react';
import fetchData, { BikeTrip } from './dataFetch';

function DisplayData() {
  const [bikeTrips, setBikeTrips] = useState<BikeTrip[]>([]);
  

  useEffect(() => {
    const getData = async () => {
      const data = await fetchData();
      setBikeTrips(data);
    };
    getData();
  }, []);

  return (
    <div>
      {bikeTrips.map((bikeTrip, index) => (
        <div key={index}>
          <h2>Bike Trip {index + 1}</h2>
          <p>Departure: {new Date(bikeTrip['Departure']).toString()}</p>
          <p>Return: {new Date(bikeTrip['Return']).toString()}</p>
          <p>Departure Station ID: {bikeTrip['Departure station id']}</p>
          <p>Departure Station Name: {bikeTrip['Departure station name']}</p>
          <p>Return Station ID: {bikeTrip['Return station id']}</p>
          <p>Return Station Name: {bikeTrip['Return station name']}</p>
          <p>Covered Distance (m): {bikeTrip['Covered distance (m)']}</p>
          <p>Duration (sec.): {bikeTrip['Duration (sec.)']}</p>
        </div>
      ))}
    </div>
  );
}

export default DisplayData;
  