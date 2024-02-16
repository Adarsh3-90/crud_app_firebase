


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDd9K1tzVqGKqFugggxruZS1BwbXcnWFf4",
  authDomain: "fir-authantication-f2d0a.firebaseapp.com",
  projectId: "fir-authantication-f2d0a",
  storageBucket: "fir-authantication-f2d0a.appspot.com",
  messagingSenderId: "475300868219",
  appId: "1:475300868219:web:d9656c492aded7debb32de"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db=getFirestore(app);