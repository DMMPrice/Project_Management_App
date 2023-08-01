import React from "react";
import "./ProjectDet.css";
import ProjectAdd from "../ProjectAdd/ProjectAdd";
const ProjectDet = () => {
    const [showBox, setShowBox] = React.useState(false);
    const showBoxHandler = () => setShowBox(false);
    return (
        <div className="project-card-holder">
            <div className="project-card">
                <ul className="project-det-1">
                    <li className="project-name">PS Srijan</li>
                    <li className="sub-projects"><b>1 done 3 left</b></li>
                </ul>
                <ul className="project-det-2">
                    <li className="edit-button"><i className="fa-solid fa-pen" onClick={() =>
                        setShowBox(true)
                    }></i></li>
                    <li className="delete-button"><i className="fa-solid fa-trash"></i></li>
                    <li className="info-button"><i className="fa-solid fa-circle-info"></i></li>
                </ul>
            </div>
            {showBox && <ProjectAdd showBoxHandler={showBoxHandler}/>}
        </div>
    )
}

export default ProjectDet;