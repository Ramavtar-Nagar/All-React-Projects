// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRny-kF5PVuFLV3DqYL00RQbgbdTp0UMQ",
  authDomain: "blogging-app-83bb5.firebaseapp.com",
  projectId: "blogging-app-83bb5",
  storageBucket: "blogging-app-83bb5.appspot.com",
  messagingSenderId: "7531932005",
  appId: "1:7531932005:web:99d061a17dc314e1c4998c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);