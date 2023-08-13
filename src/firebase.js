import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBgADPt6EdH-HDh-Fu-gCsnWko3-Vo3t0E",
  authDomain: "authentication-98e38.firebaseapp.com",
  projectId: "authentication-98e38",
  storageBucket: "authentication-98e38.appspot.com",
  messagingSenderId: "804875595453",
  appId: "1:804875595453:web:13138059d102eaa20bd1d4",
  measurementId: "G-TB7MCRNF24"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;