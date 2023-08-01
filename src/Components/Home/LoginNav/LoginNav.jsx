import logo from "./logo.png";
import "./LoginNav.css";
import React from "react";
import {Link} from "react-router-dom";
import {LoginScreen} from "../LoginScreen/LoginScreen";

export const LoginNav = () => {
    return (
        <div>
            <div className="logo-logoNav">
                <a href={'/'}>
                    <img
                        src={logo}
                        alt="Logo"
                        className="logoNav"/>
                </a>
                <p className="welcome-message">Welcomes You</p>
            </div>
        </div>
    )
}