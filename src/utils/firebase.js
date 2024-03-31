// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5fJOPerO94y9erYmqZ9g191eyTCXYCas",
  authDomain: "flixnow-gpt-f4602.firebaseapp.com",
  projectId: "flixnow-gpt-f4602",
  storageBucket: "flixnow-gpt-f4602.appspot.com",
  messagingSenderId: "1035911131592",
  appId: "1:1035911131592:web:c13969eeda3feb74d7d0fd",
  measurementId: "G-96332FDL9N",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
