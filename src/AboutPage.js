import React from 'react';
import { Footer } from './About.js';
import { NavBar } from './About.js';
import { AboutMainContent } from './About.js';

export function AboutPage() {
    return (
        <div>
            <NavBar />
            <header>
                <h1 className="title">About Project Fairytales</h1>
            </header>
            <main>
                <AboutMainContent />
            </main>
            <Footer />
        </div>
    );
}