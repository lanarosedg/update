// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Replace these with your actual Firebase config values
const firebaseConfig = {
  apiKey: "AIzaSyDaU2SkLCcHSrR6vuHrjF-IAOdONzAtasQ",
  authDomain: "lanarose-1ae55.firebaseapp.com",
  projectId: "lanarose-1ae55",
  storageBucket: "lanarose-1ae55.firebasestorage.app",
  messagingSenderId: "549011103212",
  appId: "1:549011103212:web:ed514eb1315e72ec7cf4c9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };
