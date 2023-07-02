import React from "react";
import "./ClientAdd.css";
import "../AddClientIcon/AddClientIcon"

export const ClientAdd = ({showBoxHandler}) => {
    return (
        <>
            <div className="Client-Add-window" onClick={showBoxHandler}></div>
            <div className="Client-Add-window-content">
                <i className="fa-sharp fa-solid fa-xmark close-icon-style" onClick={showBoxHandler}></i>
                <form className="ClientDetails-form">
                    <div className="first-row">
                        <div className="ClientDetails-form-subdetails">
                            <label className="Client-Add-label">Client Name</label>
                            <input className="Client-Add-input" type="text" placeholder="MIT CEK"/>
                        </div>
                        <div className="ClientDetails-form-subdetails">
                            <label className="Client-Add-label">Client GST IN</label>
                            <input className="Client-Add-input" type="text" placeholder="ABDC7830J"/>
                        </div>
                    </div>
                    <div className="second-row">
                        <div className="ClientDetails-form-subdetails">
                            <label className="Client-Add-label">Project Done</label>
                            <input className="Client-Add-input" type="text" placeholder="4"/>
                        </div>
                        <div className="ClientDetails-form-subdetails">
                            <label className="Client-Add-label">Project Ongoing</label>
                            <input className="Client-Add-input" type="text" placeholder="6"/>
                        </div>
                    </div>
                    <div className="third-row">
                        <button className="save-button" onClick={showBoxHandler}>Save</button>
                        <button className="cancel-button" onClick={showBoxHandler}>Cancel</button>
                    </div>
                </form>
            </div>
        </>
    )
};