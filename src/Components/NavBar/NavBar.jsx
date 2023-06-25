import React from 'react';
import './NavBar.css';
import logo from './logo.png';

const NavBar = () => {
    return (<div className="container">
        <div className="logo">
            <a href={'/'}>
                <img
                    src={logo}
                    alt="Logo"/>
            </a>
        </div>
        <div className="nav-buttons">
            <nav>
                <ul className="nav-details">
                    <li>Client Details</li>
                    <li>Project Details</li>
                    <li><span className="log-out">Log out</span></li>
                </ul>
            </nav>
        </div>
    </div>);
}
export default NavBar;