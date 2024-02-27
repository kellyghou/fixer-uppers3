import { initializeApp } from "firebase/app";
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

import fairytaleData from './data/fairytales.json';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import 'whatwg-fetch';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBd27rl2LAgd2xQ7bsnYzH-M2CP-dFgRvs",
  authDomain: "fixer-uppers3.firebaseapp.com",
  projectId: "fixer-uppers3",
  storageBucket: "fixer-uppers3.appspot.com",
  messagingSenderId: "835145866169",
  appId: "1:835145866169:web:7de7995773388f0aab7468"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
  <BrowserRouter>
    <App fairytaleData={fairytaleData}/>
  </BrowserRouter>
  //</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
