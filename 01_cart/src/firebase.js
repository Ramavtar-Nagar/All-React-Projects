// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnsWicNWi2aoS0W4T-Jiczjc5fSgL3Qt0",
  authDomain: "cart-4b29d.firebaseapp.com",
  databaseURL: "https://cart-4b29d-default-rtdb.firebaseio.com",
  projectId: "cart-4b29d",
  storageBucket: "cart-4b29d.appspot.com",
  messagingSenderId: "219392651137",
  appId: "1:219392651137:web:b5ab86dad56749caa78280"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
