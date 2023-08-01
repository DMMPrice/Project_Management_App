import React from 'react';
import './NavBar.css';
import logo from './logo.png';
import {Link} from "react-router-dom";

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
                    <Link to="/clientdet">
                        <li>Client Details</li>
                    </Link>
                    <Link to="/projectdet">
                        <li>Project Details</li>
                    </Link>
                    <Link to="/">
                        <li><span className="log-out">Log out</span></li>
                    </Link>
                </ul>
            </nav>
        </div>
    </div>);
}
export default NavBar;