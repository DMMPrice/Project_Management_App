import React from 'react';
import './AddProject.css';
import {ClientAdd} from "../ClientAdd/ClientAdd";

const AddProject = () => {
    const [showBox, setShowBox] = React.useState(false);
    const showBoxHandler = () => setShowBox(false);
    return (
        <div>
            <div className="add-icon-style-box" onClick={() =>
                setShowBox(true)
            }>
                <i className="fa-solid fa-plus add-icon-style"></i>
            </div>
            {showBox && <ClientAdd showBoxHandler={showBoxHandler}/>}
        </div>)
}

export default AddProject;