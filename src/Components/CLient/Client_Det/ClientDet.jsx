import React from "react";
import "./Client_Details.css";

const ClientDet = props => {
    return (
        <div className="client-card">
            <img src={props.clientImage} alt={"avatar"}/>
            <ul className="client-det">
                <li className="client-name">{props.clientName}</li>
                <li className="client-projects">{props.clientProjects} projects</li>
            </ul>
        </div>
    )
}
export default ClientDet;