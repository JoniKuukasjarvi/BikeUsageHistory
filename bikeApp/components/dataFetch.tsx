import { collection, getDocs, query, limit } from 'firebase/firestore';
import db from './firebase';

export interface BikeTrip {
  "Departure": string;
  "Return": string;
  "Departure station id": string;
  "Departure station name": string;
  "Return station id": string;
  "Return station name": string;
  "Covered distance (m)": number;
  "Duration (sec.)": number;
}

const fetchData = async () => {
  const bikeTrips: BikeTrip[] = [];
  const q = query(collection(db, 'my_collection'), limit(10));
  const querySnapshot = await getDocs(q);

querySnapshot.forEach((doc) => {
  const data = doc.data({serverTimestamps: 'estimate'}) as BikeTrip;
  bikeTrips.push(data);
  console.log(data);
});
  return bikeTrips;
};

export default fetchData;