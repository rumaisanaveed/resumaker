import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your Firebase config
const firebaseConfig = {
  // apiKey: process.env.NEXT_PUBLIC_API_KEY,
  // authDomain: process.env.NEXT_AUTH_DOMAIN,
  // projectId: process.env.NEXT_PROJECT_ID,
  // storageBucket: process.env.NEXT_STORAGE_BUCKET,
  // messagingSenderId: process.env.NEXT_MESSAGING_SENDER_ID,
  // appId: process.env.NEXT_APP_ID,
  // measurementId: process.env.NEXT_MEASUREMENT_ID,
  apiKey: "AIzaSyACr7BOlJM0pdxz1VO0LEz7ZfTm7lN3Dk0",
  authDomain: "resumaker-b06f3.firebaseapp.com",
  projectId: "resumaker-b06f3",
  storageBucket: "resumaker-b06f3.appspot.com",
  messagingSenderId: "248767707026",
  appId: "1:248767707026:web:75927197add9420f4cb34b",
  measurementId: "G-4QRME0LE22",
};

// Initialize Firebase only if it hasn't been initialized already
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app); // Initialize Firestore

export { db };
