import {Link} from "react-router-dom";
import React from "react";
import "./SignUp.css";

export const SignUp = () => {
    return (
        <div className="SignUp-container">
            <div className="SignUp-container-1">
                <label>Full Name</label>
                <input type="text" placeholder="ADB Chaudhrary"/>
            </div>
            <div className="SignUp-container-2">
                <label>Email</label>
                <input type="email" placeholder="113@gmail.com"/>
            </div>
            <div className="SignUp-container-3">
                <label>Password</label>
                <input type="password" placeholder="*********"/>
            </div>
            <div className="SignUp-container-4">
                <label>Confirm Password</label>
                <input type="password" placeholder="*********"/>
            </div>
            <Link to='/signin'>
                <div className="SignUp-container-5">
                    <button className="create-account-button">Create Account</button>
                </div>
            </Link>
        </div>
    )
}