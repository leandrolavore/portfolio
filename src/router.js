import React from 'react'
import {Switch, Route} from 'react-router-dom'
import ReactProjects from "./pages/components/react-projects";
import PythonProjects from "./pages/components/python-projects";
import Experience from "./pages/components/experience";
import About from "./pages/about";

const Router = () =>(
    <Switch>
        <Route exact path = '/' component = {ReactProjects}/>
        <Route exact path = '/react' component = {ReactProjects}/>
        <Route exact path = '/python' component = {PythonProjects}/>
        <Route exact path = '/experience' component = {Experience}/>
        <Route exact path = '/about' component = {About}/>
    </Switch>
)

export default Router;