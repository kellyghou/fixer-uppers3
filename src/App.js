import React from 'react';
import { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

import { ExplorePage } from './Explorepage';
import { AboutPage } from './AboutPage';
import { HomePage } from './Homepage';

function App(props) {
  const [data, setData] = useState([]);
  const [cardData, setCardData] = useState([]);
  const [alertMessage, setAlertMessage] = useState(null);
  const [isFetching, setIsFetching] = useState(false);
  const [alertCardMessage, setAlertCardMessage] = useState(null);
  const [isFetchingCard, setIsFetchingCard] = useState(false);

  const fetchCardData = () => {
    setIsFetchingCard(true);
    fetch('cards.json')
      .then(function(response){
        return response.json();
      })
      .then(function(json) {
        setCardData(json);
      })
      .catch((error) => {
        setAlertCardMessage(error.message);
      })
      .then(() => {
        setIsFetchingCard(false);
      });
  }

  useEffect(() => {
    fetchCardData();
  }, [])
  
  return (
    <Routes>
      <Route index element={<HomePage cardData={cardData} alertMessage={alertCardMessage} waiting={isFetchingCard}/>} />
      <Route path="explore/:category?" element={<ExplorePage videoDatabase={props.videoDatabase} alertMessage={alertMessage} waiting={isFetching}/>} />
      <Route path="about" element={<AboutPage />} />
      <Route path="home" element={<HomePage cardData={cardData} alertMessage={alertCardMessage} waiting={isFetchingCard}/>} />
      <Route path="*" element={<Navigate to="/home" />} ></Route>
    </Routes>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    // <div>
    //         <NavBar />
    //         <header>
    //             <h1 className="title">About Project Fairytales</h1>
    //         </header>
    //         <Footer />
    //     </div>
  );
}

export default App;
