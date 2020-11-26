import React from 'react';


import './navbar.css'

const NavBar = () => {
    return (
        <nav className="navbar">
            <a href="/home" className='navbar-brand'>
                <img src="./assets/logo.png" alt="logo" className="navbar-logo" />
                Bits to Bytes
            </a>
            <div className="navbar-itm-container">
                <NavBarItem title="Home" link="#home" />
                <NavBarItem title="Events" link="#events" />
                <NavBarItem title="Vision" link="#vision" />
                <NavBarItem title="Team" link="#team" />
                <NavBarItem title="Join us" link="#contact" />
            </div>
        </nav>
    );
}


export default NavBar;

const NavBarItem = ({ title, link }) => {
    return (
        <a href={link} className="navbar-itm">{title}</a>
    );
}