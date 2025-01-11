// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgH5mHABTUava3rf738IGQFiZ6jIZ4Ww0",
  authDomain: "plm-hackathon.firebaseapp.com",
  projectId: "plm-hackathon",
  storageBucket: "plm-hackathon.firebasestorage.app",
  messagingSenderId: "1041012615777",
  appId: "1:1041012615777:web:8d8799e1a15cb506725820",
  measurementId: "G-FBQNN0LH76"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);