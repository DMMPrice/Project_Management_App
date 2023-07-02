import React from "react";
import "./ProjectAdd.css";

const ProjectAdd = ({showBoxHandler}) => {
    return (
        <>
            <div className="Project-Add-window" onClick={showBoxHandler}></div>
            <div className="Project-Add-window-content">
                <i className="fa-sharp fa-solid fa-xmark close-icon-style" onClick={showBoxHandler}></i>
                <form className="ProjectDetails-form">
                    <div className="first-row">
                        <div className="ProjectDetails-form-subdetails">
                            <label className="Project-Add-label">Project Name</label>
                            <input className="Project-Add-input" type="text" placeholder="ABC Construction"/>
                        </div>
                        <div className="ProjectDetails-form-subdetails">
                            <label className="Project-Add-label">Project ID</label>
                            <input className="Project-Add-input" type="text" placeholder="AB - 101 - 23"/>
                        </div>
                    </div>
                    <div className="second-row">
                        <div className="ProjectDetails-form-subdetails">
                            <label className="Project-Add-label">Project Start Date</label>
                            <input className="Project-Add-input" type="date" />
                        </div>
                        <div className="ProjectDetails-form-subdetails-2">
                            <label className="Project-Add-label">Project End Date</label>
                            <input className="Project-Add-input" type="date"/>
                        </div>
                    </div>
                    <div className="fourth-row">
                        <div className="ClientDetails-form-subdetails">
                            <label className="Project-Add-label">Client Name</label>
                            <input className="Project-Add-input" type="text" placeholder="PS Srijan"/>
                        </div>
                        <div className="ClientDetails-form-subdetails">
                            <label className="Project-Add-label">Net Worth</label>
                            <input className="Project-Add-input" type="text" placeholder="12 Lakhs"/>
                        </div>
                    </div>
                    <div className="third-row">
                        <button className="detail-button" onClick={showBoxHandler}>Detailed View</button>
                        <button className="save-button" onClick={showBoxHandler}>Save</button>
                        <button className="cancel-button" onClick={showBoxHandler}>Cancel</button>
                    </div>
                </form>
            </div>
        </>
    )
}
export default ProjectAdd;