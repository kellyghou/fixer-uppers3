import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from "./img/ecofriendslogo.png";
import cacheImages from './CacheImages';
import harshita from './img/harshita.heic';
import kassidy from './img/kassidy.png';
import kelly from './img/kelly.jpg';
import duyen from './img/duyen.jpg';
import ryu from './img/ryu.jpg';

cacheImages([logoImage]);

export function Footer() {
   return (
       <footer>
           <div className="container">
               <p><span className="material-icons">email:</span> ecofriends@uw.edu</p>
               <p>&copy; EcoFriends 2024</p>
               <p>&copy; Harshita, Ryu, Kelly, Duyen, Kassidy</p>
           </div>
       </footer>
   );
}

function NavLinks() {
    return (
        <div className="collapse navbar-collapse" id="toggleMobileMenu">
            <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                    <Link to="/home" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                    <Link reloadDocument to="/explore" className="nav-link">Explore</Link>
                </li>
                <li className="nav-item">
                    <Link to="/about" className="nav-link about-link">About Us</Link>
                </li>
                <li className="nav-item">
                    <Link to="/login" className="nav-link">Login</Link>
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
           <img src={logoImage} alt="ecofriends logo" className="d-inline-block align-top"/>
           Eco Friends
       </a>
   );
}

export function NavBar() {
   return(
       <div className="container-fluid">
           <nav className="navbar navbar-expand-md">
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
     <div className='about-container'>
       <div className='mission-box'>
         <p>Every human carbon footprint contributes to all species of the environment. <br></br>
            Our mission is to influence our users through our content. <br></br>
            Eco Friends is a way to become friendlier with the environment!
         </p>
       </div>
       <div className='right-content'>
         <GoalStatement />
         <ProfileImage />
       </div>
     </div>
   );
 }

function GoalStatement() {
   return (
     <div className='goal-box'>
       <p>Our goal is to create change.</p>
     </div>
   );
}
  
function ProfileImage() {
   return (
        <div className='image-container'>
            <div className='profile'>
                <div className='image-caption'>
                    <img src={harshita} alt='Harshita' />
                    <p>Harshita Chandgothia</p>
                </div>
                <div className='image-caption'>
                    <img src={kelly} alt='Kelly' />
                    <p>Kelly Hou</p>
                </div>
                <div className='image-caption'>
                    <img src={kassidy} alt='Kassidy' />
                    <p>Kassidy Gardner</p>
                </div>
                <div className='image-caption'>
                    <img src={duyen} alt='Duyen' />
                    <p>Duyen Nguyen</p>
                </div>
                <div className='image-caption'>
                    <img src={ryu} alt='Ryu' />
                    <p>Ryu Ngammuang</p>
                </div>
            </div>
        </div>
   );
}

function WhoWeAreStatement() {
   return (
       <section>
           <p className='about-heading'>
           We created Eco Friends to help individuals tailor their lifestyle to make their living choices more healthy for them and the environment.
           </p>
       </section>
   );
}

export function AboutMainContent() {
   return (
       <div className="container">
           <WhoWeAreStatement />
           <MissionStatement />
       </div>
   );
}
