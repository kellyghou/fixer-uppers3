import React from 'react';
import { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import './App.css';

import { ExplorePage } from './Explorepage';
import { AboutPage } from './AboutPage';
import { HomePage } from './Homepage';
import { LoginPage } from './LoginPage';

function App(props) {
  const [cardData, setCardData] = useState([]);
  const [alertCardMessage, setAlertCardMessage] = useState(null);
  const [isFetchingCard, setIsFetchingCard] = useState(false);
  // const [homepageCategory, setHomepageCategory] = useState([]);

  const fetchCardData = () => {
    setIsFetchingCard(true);
    fetch('/cards.json')
      // .then(res => res.text())
      // .then(text => console.log(text)) 
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
      <Route exact path="explore/:prefilter?" element={<ExplorePage /*homepageCategory={homepageCategory}*/ videoDatabase={props.videoDatabase}/>} />
      <Route path="about" element={<AboutPage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="home" element={<HomePage /*setHomepageCategory={setHomepageCategory}*/ cardData={cardData} alertMessage={alertCardMessage} waiting={isFetchingCard}/>} />
      <Route path="*" element={<Navigate to="/home" />} ></Route>
    </Routes>
  );
}

export default App;
