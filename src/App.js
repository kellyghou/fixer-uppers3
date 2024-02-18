import React from 'react';
import { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

import fairytaleData from './data/fairytales.json';

import { HomePage } from './Homepage';
import { AboutPage } from './AboutPage';

function App(props) {
  const [data, setData] = useState([]);
  const [alertMessage, setAlertMessage] = useState(null);
  const [isFetching, setIsFetching] = useState(false);

  const fetchData = () => {
    setIsFetching(true);
    fetch('fairytales.json')
      .then(function(response){
        return response.json();
      })
      .then(function(json) {
        setData(json);
      })
      .catch((error) => {
        setAlertMessage(error.message);
      })
      .then(() => {
        setIsFetching(false);
      });
  }

  useEffect(() => {
    fetchData();
  }, [])
  
  return (
    <>
    <Routes>
      <Route index element={<HomePage fairytaleData={data} alertMessage={alertMessage} waiting={isFetching}/>} />
      <Route path="home" element={<HomePage fairytaleData={data} alertMessage={alertMessage} waiting={isFetching}/>} />
      <Route path="about" element={<AboutPage />} />
      <Route path="*" element={<Navigate to="/home" />} ></Route>
    </Routes>
    </>

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
