import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
} from 'react-router-dom';
import NavBar from "./Components/NavBar/NavBar";
import React, {useCallback, useState} from "react";
import ClientDetail from "./Components/CLient/Client_Det/Client_Details";
import ProjectDet from "./Components/Project/Project_Det/ProjectDet";
import AddProjectIcon from "./Components/Project/AddProjectIcon/AddProjectIcon";
import {LoginNav} from "./Components/Home/LoginNav/LoginNav";
import {LoginScreen} from "./Components/Home/LoginScreen/LoginScreen";
import {SignUp} from "./Components/Home/SignUp/SignUp";
import {NewClientDet} from "./Components/CLient/NewClientDet/NewClientDet";
import ClientList from "./Components/CLient/Client_Det/ClientList";
import Client_Details from "./Components/CLient/Client_Det/Client_Details";
import {AuthContext} from "./shared/context/Auth-context";


function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const login = useCallback(() => {
        setIsLoggedIn(true);
    }, []);

    const logout = useCallback(() => {
        setIsLoggedIn(false);
    }, []);

    let routes;
    return (
        <Router>
            <Switch>
                <Route path="/login" exact>
                    <LoginNav/>
                    <LoginScreen/>
                </Route>
                <Route path="/signup" exact>
                    <LoginNav/>
                    <SignUp/>
                </Route>
                <Route path="/clientdet" exact>
                    <NavBar/>
                    <Client_Details/>
                </Route>
                <Route path="/projectdet" exact>
                    <NavBar/>
                    <ProjectDet/>
                    <AddProjectIcon/>
                </Route>
                <Redirect to="/login"/>
            </Switch>
        </Router>
    )
}

export default App;
