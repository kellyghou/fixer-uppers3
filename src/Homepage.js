import React from 'react';
import { Footer } from './About.js';
import { NavBar } from './About.js';
import CategoriesList from './CategoryCards.js';
import { useEffect } from 'react';
import { Button } from '@mui/material';
import { blockStatement } from '@babel/types';

export function HomePage(props) {
    return (
        <div>
            <NavBar />
            <main className='homepage-content'>
                <div class='homepage-welcome-container'>
                    <img src='./img/waterfallhomepage.png' class='homepage-waterfall-image'/>
                    <div class='homepage-welcome-text-container'>
                        <h1 class='homepage-title'><b>Protect our planet everyday</b></h1>
                        <p class='homepage-subtitle'>Learn how you can incorporate sustainable habits in your daily life to support and save our environment.</p>
                    </div>
                </div>
                <Button variant='contained' href='explore' sx={{display: 'block', margin: 'auto', width: '10rem', textAlign: 'center', marginBottom: '2rem', marginTop: '2rem'}}>Get Started</Button>
                <span class='homepage-welcome-learnmore'>Learn more about what you can do</span>
                {props.waiting && <p>Loading cards...</p>}
                {props.alertMessage && <p className="bg-danger text-light p-3 mb-2">Failed to fetch the data. Error: {props.alertMessage}</p>}
                <CategoriesList cardData={props.cardData}/>
            </main>
            <Footer />
        </div>
    );
}