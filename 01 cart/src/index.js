import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import * as firebase from 'firebase';
// import 'firebase/firestore';
import {initializeApp} from 'firebase/app';

const root = ReactDOM.createRoot(document.getElementById('root'));

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


root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
