import React from 'react';
import { NavLink } from 'react-router-dom';

import './navbar.css'

const NavBar = () => {
    return (
        <nav className="navbar">
            <a href="/home" className='navbar-brand'>
                <img src="./assets/logo.png" alt="logo" className="navbar-logo" />
                Bits to Bytes
            </a>
            <div className="navbar-itm-container">
                <NavBarItem title="Home" link="#home-page" />
                <NavBarItem title="Events" link="#events-page" />
                <NavBarItem title="Vision" link="#vision-page" />
                <NavBarItem title="Team" link="#team-page" />
                <NavBarItem title="Join us" link="#contact-page" />
            </div>
        </nav>
    );
}


export default NavBar;

const NavBarItem = ({ title, link }) => {
    return (
        <NavLink to={link} className="navbar-itm">{title}</NavLink>
    );
}