import React, { useState } from 'react';
import { assets } from '../../assets/assets';
import './Nav.css';
import { useNavigate } from 'react-router-dom';

const Nav = () => {
    const [state, setState] = useState('Home');
    const navi = useNavigate();

    const gotohome = () =>{
        navi('/')
    }

    const showLogin = () => {
        navi('/auth');
    };

    // Define the scrollToNowShowing function inside the Nav component
    const scrollToNowShowing = () => {
        const section = document.getElementById("nowShowing");
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    const scrollToAboutus = () => {
        const section1 = document.getElementById("Aboutus");
        if (section1) {
            section1.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className='Nav'>
            <img onClick={gotohome} src={assets.logo} alt="logo" />
            <div onClick={gotohome} id='head'>CineTick</div>
            <ul className='Navmenu'>
                <li onClick={() =>{setState("Home");gotohome();}} className={state === 'Home' ? 'active' : ''}>Home</li>
              
                <li onClick={() => { setState("Movies"); gotohome();scrollToNowShowing(); }} className={state === 'Movies' ? 'active' : ''}>
                    Now Showing
                </li>

                <li onClick={() => setState("Upcoming")} className={state === 'Upcoming' ? 'active' : ''}>Up Coming</li>

                <li onClick={() => {setState("Aboutus"); gotohome(); scrollToAboutus();}} className={state === 'Aboutus' ? 'active' : ''}>About Us</li>

            </ul>
            <div className="Navright">
                <img id='img' src={assets.search} alt="searchicon" />
                <button onClick={showLogin}>
                    <img id="icon" src={assets.user} alt="user icon" />
                    Sign in
                </button>
            </div>
        </div>
    );
};

export default Nav;
