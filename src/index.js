import { initializeApp } from "firebase/app";
// Required for side-effects
import "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

import cardData from './data/cards.json';

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

const db = getFirestore(app);
// await setDoc(doc(db, "videos", "reusablebag"), {
//   
// });
// const q = collection(db, "videos");
// const querySnapshot = await getDocs(q);
// querySnapshot.forEach((doc) => {
//   // doc.data() is never undefined for query doc snapshots
//   console.log(doc.id, " => ", doc.data());
// });

// const docRef = doc(db, "videos", "LBwyIEAqptGoN7TNFMq4");

// const docSnap = await getDoc(docRef);

// const storage = getStorage();

// const energyRef = ref(storage, 'reusablebag.mp4');

// const energyVideosRef = ref(storage, './img/reusablebag.mp4');

// console.log (energyRef, energyVideosRef);
// if (docSnap.exists()) {
//   console.log("Document data:", docSnap.data());
// } else {
//   // docSnap.data() will be undefined in this case
//   console.log("No such document!");
// }



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
  <BrowserRouter>
    <App cardData={cardData} videoDatabase={db}/>
  </BrowserRouter>
  //</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
