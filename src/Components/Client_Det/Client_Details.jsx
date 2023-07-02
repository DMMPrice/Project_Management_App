import React from 'react';
import './Client_Details.css';
import avatar from './Ellipse 1.png';

const Client_Details = () => {
    return (<div className="client-card-holder">
            <div className="client-card">
                <img src={avatar} alt={"avatar"}/>
                <ul className="client-det">
                    <li className="client-name">PS Srijan</li>
                    <li className="client-projects">4 projects</li>
                </ul>
            </div>
        </div>

    )
};

export default Client_Details;