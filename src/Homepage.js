import React from 'react';
import { Footer } from './About.js';
import { NavBar } from './About.js';
import CategoriesList from './CategoryCards.js';
import { useEffect } from 'react';

export function HomePage(props) {
    return (
        <div>
            <NavBar />
            <main className='homepage-content'>
            <   h1 className="title">Welcome</h1>
                {props.waiting && <p>Loading cards...</p>}
                {props.alertMessage && <p className="bg-danger text-light p-3 mb-2">Failed to fetch the data. Error: {props.alertMessage}</p>}
                <CategoriesList cardData={props.cardData}/>
            </main>
            <Footer />
        </div>
    );
}