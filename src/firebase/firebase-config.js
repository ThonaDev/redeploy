import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDwaKYIjSMHIkYQh_BMgNSHg0j8Ucc2EOE",
  authDomain: "jobcollap-fcd01.firebaseapp.com",
  projectId: "jobcollap-fcd01",
  storageBucket: "jobcollap-fcd01.firebasestorage.app",
  messagingSenderId: "644320079783",
  appId: "1:644320079783:web:7bb3acf7723de27b6a5082",
  measurementId: "G-CX9DSG51FV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);