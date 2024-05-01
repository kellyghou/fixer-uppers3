import React from 'react';
import { Footer } from './About.js';
import { NavBar } from './NavBar.js';
import CategoriesList from './CategoryCards.js';
import { HomeWelcome, CardWelcome } from './WelcomeComponents.js';

export function HomePage(props) {
    // const setHomepageCategory = props.setHomepageCategory;

    return (
        <div>
            <NavBar/>
            <main className='homepage-content'>
                <HomeWelcome/>
                <div id='cards'>
                    <CardWelcome/>
                    {props.waiting && <p>Loading cards...</p>}
                    {props.alertMessage && <p className="bg-danger text-light p-3 mb-2">Failed to fetch the data. Error: {props.alertMessage}</p>}
                    <CategoriesList cardData={props.cardData} /*setHomepageCategory={setHomepageCategory}*//>
                </div>
            </main>
            <Footer/>
        </div>
    );
}