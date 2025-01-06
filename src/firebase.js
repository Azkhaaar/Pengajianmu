import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Import Firestore
// import { getAnalytics } from "firebase/analytics"; // Remove this line if not used

const firebaseConfig = {
  apiKey: "AIzaSyCejwxi8VNMtFMqjCjqlMjiryJvqJrO9sI",
  authDomain: "pengajianmu-a2749.firebaseapp.com",
  projectId: "pengajianmu-a2749",
  storageBucket: "pengajianmu-a2749.firebasestorage.app",
  messagingSenderId: "1065952908613",
  appId: "1:1065952908613:web:03d898c5b88461ca691a2c",
  measurementId: "G-L9TMTK6T4Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // Initialize Firestore and assign to db
// const analytics = getAnalytics(app); // Comment this line if not used

export { db }; // Export db for use in other files