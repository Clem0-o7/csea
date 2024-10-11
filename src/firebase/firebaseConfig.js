import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAT-g5ywqNcSX15VoPjcPyWvoorgoTW3vo",
  authDomain: "csea-af2d0.firebaseapp.com",
  databaseURL: "https://csea-af2d0-default-rtdb.asia-southeast1.firebasedatabase.app", // Correct URL
  projectId: "csea-af2d0",
  storageBucket: "csea-af2d0.appspot.com",
  messagingSenderId: "120322207159",
  appId: "1:120322207159:web:98d9d10d3eded2314f8c32",
  measurementId: "G-9P2970C2KR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app); // Initialize db here
export const storage = getStorage(app);
