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
import AddProject from "./Components/AddProject/AddProject";
import ClientDetail from "./Components/Client_Det/Client_Details";

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
                    <AddProject/>
                </Route>
                <Route path="/projectdet" exact>
                    <ClientDetail/>
                    <AddProject/>
                </Route>
                <Redirect to="/"/>
            </Switch>
        </Router>
    )
}

export default App;
