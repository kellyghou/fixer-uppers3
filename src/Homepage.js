import React from 'react';
import { Footer } from './About.js';
import { NavBar } from './About.js';
import CategoriesList from './CategoryCards.js';
import { HomeWelcome } from './WelcomeComponents.js';

export function HomePage(props) {
    // const setHomepageCategory = props.setHomepageCategory;

    return (
        <div>firebase hosting:channel:deploy CHANNEL_ID
            <NavBar />
            <main className='homepage-content'>
                <HomeWelcome/>
                <div id='cards'>
                    {props.waiting && <p>Loading cards...</p>}
                    {props.alertMessage && <p className="bg-danger text-light p-3 mb-2">Failed to fetch the data. Error: {props.alertMessage}</p>}
                    <CategoriesList cardData={props.cardData} /*setHomepageCategory={setHomepageCategory}*//>
                </div>
            </main>
            <Footer />
        </div>
    );
}