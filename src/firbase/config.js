// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCq4E-42NSMjZrU3dwlEam4YJGqOmli7TA",
  authDomain: "chat-f27ca.firebaseapp.com",
  projectId: "chat-f27ca",
  storageBucket: "chat-f27ca.appspot.com",
  messagingSenderId: "967594128298",
  appId: "1:967594128298:web:aff58610f2b599eac031d3",
  measurementId: "G-BYN2M2EKPR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
