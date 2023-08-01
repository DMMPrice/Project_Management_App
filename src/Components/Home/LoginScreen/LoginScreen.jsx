import {Link} from "react-router-dom";
import "./LoginScreen.css";
import React from "react";

export const LoginScreen = () => {
    return (
        <div className="loginNav-container">
            <div className="loginNav-container-1">
                <label>Email</label>
                <input type="email" placeholder="113@gmail.com"/>
            </div>
            <div className="loginNav-container-2">
                <label>Password</label>
                <input type="password" placeholder="*********"/>
            </div>
            <div className="loginNav-container-3">
                <Link to="/signup">
                    <button className="sign-up-button">Sign Up</button>
                </Link>
                <Link to='/clientdet'>
                    <button className="sign-in-button">Sign In</button>
                </Link>
            </div>
        </div>
    )
}