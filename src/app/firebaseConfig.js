import { initializeApp } from "firebase/app";
import { getFireStore } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "resumaker-b06f3.firebaseapp.com",
  projectId: "resumaker-b06f3",
  storageBucket: "resumaker-b06f3.appspot.com",
  messagingSenderId: "248767707026",
  appId: "1:248767707026:web:75927197add9420f4cb34b",
  measurementId: "G-4QRME0LE22",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFireStore(app);

export { db };
