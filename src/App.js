import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
} from 'react-router-dom';
import NavBar from "./Components/NavBar/NavBar";
import React from "react";
import TestComponent from "./Components/TestComponent";
import AddClientIcon from "./Components/CLient/AddClientIcon/AddClientIcon";
import ClientDetail from "./Components/CLient/Client_Det/Client_Details";
import ProjectDet from "./Components/Project/Project_Det/ProjectDet";
import AddProjectIcon from "./Components/Project/AddProjectIcon/AddProjectIcon";

function App() {
    return (
        <Router>
            <NavBar/>
            <Switch>
                <Route path="/" exact>
                    <TestComponent/>
                </Route>
                <Route path="/clientdet" exact>
                    <ClientDetail/>
                    <AddClientIcon/>
                </Route>
                <Route path="/projectdet" exact>
                    <ProjectDet/>
                    <AddProjectIcon/>
                </Route>
                <Redirect to="/"/>
            </Switch>
        </Router>
    )
}

export default App;
