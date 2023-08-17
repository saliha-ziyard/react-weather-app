// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpTtyrM_3OYrUNgHnlC8GfUodA8W4Mwj4",
  authDomain: "react-weather-app-4d67b.firebaseapp.com",
  projectId: "react-weather-app-4d67b",
  storageBucket: "react-weather-app-4d67b.appspot.com",
  messagingSenderId: "72710113301",
  appId: "1:72710113301:web:ddc0e2f871248911f0a61c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);