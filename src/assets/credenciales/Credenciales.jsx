// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAwpwwFhF5dJ6vMHPWt43Rcf3fk7EqBXo",
  authDomain: "formulariospas.firebaseapp.com",
  projectId: "formulariospas",
  storageBucket: "formulariospas.appspot.com",
  messagingSenderId: "295580426318",
  appId: "1:295580426318:web:ebbf35680bb41af015631f"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);