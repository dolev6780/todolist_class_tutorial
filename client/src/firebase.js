// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNVji9Pnnfdl0_z8NyDiv-4-QP58KhJT4",
  authDomain: "todolist-3b094.firebaseapp.com",
  projectId: "todolist-3b094",
  storageBucket: "todolist-3b094.firebasestorage.app",
  messagingSenderId: "392239960607",
  appId: "1:392239960607:web:48795a16d733cba895bb2a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);