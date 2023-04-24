import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDkrIBeFDJ-QB8uhLjUK6byiXrUuih0lTY",
  authDomain: "utf8bikeapp.firebaseapp.com",
  projectId: "utf8bikeapp",
  storageBucket: "utf8bikeapp.appspot.com",
  messagingSenderId: "397923302988",
  appId: "1:397923302988:web:99b93755247f4f882bfee9"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();

export default getFirestore(app);