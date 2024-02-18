import React from 'react';
import { Link } from 'react-router-dom';
import * as bootstrap from 'bootstrap';

export function Footer() {
    return (
        <footer>
            <div className="container">
                <p><span className="material-icons">email:</span> projectfairytales@uw.edu</p>
                <p>&copy; Project Fairytales 2022</p>
                <p>&copy; Emily Yu, Hatice Ece Oz, Kelly Hou, Shrilekha Bhat (INFO340A Group B2)</p>
            </div>
        </footer>
    );
}

function NavLinks() {
    return (
        <div className="collapse navbar-collapse" id="toggleMobileMenu">
            <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                    <Link to="/home">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/about">About</Link>
                </li>
                <li className="nav-item">
                    <Link to="/map/1">Map</Link>
                </li>
                <li className="nav-item">
                    <Link to="/madlibs">MadLibs</Link>
                </li>
            </ul>
        </div>
    );
}

function HamburgerMenu() {
    return (
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#toggleMobileMenu" aria-controls="toggleMobileMenu" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
    );
}

function HomeLogo() {
    return (
        <a href="/" className="navbar-brand group-name">
            <img src="https://static.thenounproject.com/png/934183-200.png" alt="magical book logo" className="d-inline-block align-top" />
            Fairytales
        </a>
    );
}

export function NavBar() {
    return(
        <div className="container-fluid">
            <nav className="navbar navbar-expand-md navbar-dark">
                <div className="container-fluid">
                    <HomeLogo />
                    <HamburgerMenu />
                    <NavLinks />
                </div>
            </nav>
        </div>
    );
}

function MissionStatement() {
    return (
        <section>
            <h2 className="about-heading">Our mission</h2>
            <p>
                We decided to create a website providing users with fairytales and folktales from around
                the world in an effort to promote respect and understanding towards cultural differences.
                Cultural prejudice leads to many issues such as racist remarks, hate crimes, and the
                exclusion of others, which then lead to even more issues such as feelings of depression,
                anxiety, and resentment. Thus, cultural intolerance has deep social impacts that go beyond
                the occasional racist comment. Especially in the present day where Asian hate crimes are
                on the rise and American politics is devolving into ad hominem arguments often centered
                around prejudiced remarks, the need to address cultural prejudice is especially relevant
                and necessary. The biggest and most obvious root cause of cultural prejudice is the fact
                that people are not exposed to accurate and interesting information about diverse cultures.
                Of course, some cultural practices will be more or less appealing to different people, but
                at least a more complete understanding of cultures will lead to constructive conversations
                in the event of disagreement, rather than hurtful remarks and destructive behavior. Thus,
                our group chose to use fairytales from many different cultures to teach people about different
                cultural traditions because fairytales are entertaining, saturated with cultural details, and
                easy to understand. 
            </p>
        </section>
    );
}

function UsageList() {
    return (
        <ul>
            <li>
                Click on the around-the-world map located under the "Maps" tab, where you can take a virtual trip to any country you want and read the stories that come from there 
            </li>
            <li>
                You can alternatively use the filters displayed on the homepage to search for stories using criteria other than location, such as genre or age range. 
            </li>
            <li>
                Additionally, you can build your very own mad-libs fairytale!
            </li>
        </ul>
    );
}

function UsageStatement() {
    return (
        <section>
            <h2 className="about-heading">Using Project Fairytales</h2>
            <UsageList />
        </section>
    );
}

function WhoWeAreStatement() {
    return (
        <section>
            <h2 className="about-heading">Who we are</h2>
            <p>
                We are a group of students at the University of Washington who created this website as a
                final project demonstrating our proficiency in HTML, CSS, Javascript, and React.
            </p>
        </section>
    );
}

export function AboutMainContent() {
    return (
        <div className="container">
            <WhoWeAreStatement />
            <MissionStatement />
            <UsageStatement />
        </div>
    );
}