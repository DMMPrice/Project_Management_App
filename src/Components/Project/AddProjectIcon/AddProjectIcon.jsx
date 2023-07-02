import React from 'react';
import ProjectAdd from "../ProjectAdd/ProjectAdd";

const AddProjectIcon = () => {
    const [showProjectBox, setShowProjectBox] = React.useState(false);
    const showProjectHandler = () => setShowProjectBox(false);
    return (
        <div>
            <div className="add-icon-style-box" onClick={() =>
                setShowProjectBox(true)
            }>
                <i className="fa-solid fa-plus add-icon-style"></i>
            </div>
            {showProjectBox && <ProjectAdd showBoxHandler={showProjectHandler}/>}
        </div>
    )
}
export default AddProjectIcon;