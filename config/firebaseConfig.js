// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCmONFF492LJCwljMPYtJLC2em8DgU-gFw",
  authDomain: "portfolio-19c60.firebaseapp.com",
  projectId: "portfolio-19c60",
  storageBucket: "portfolio-19c60.firebasestorage.app",
  messagingSenderId: "944313323045",
  appId: "1:944313323045:web:0e5fab0965488769d639cc",
  measurementId: "G-KCX68XJ5RZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };