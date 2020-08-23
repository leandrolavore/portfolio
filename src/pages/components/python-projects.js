import React, { Component } from 'react';
import PythonCard from './python-card';

export default class PythonProjects extends Component {

    constructor(){
        super();
        this.state = {   
            python_projects : {
                titles: [
                    "Web-scrapper",
                    "Automated-mail",
                    "Voice-assistant",
                    "Web-scrapper-2"
                ],
            }
        };
    }

    render(){
        const {python_projects} = this.state;

        let cards = python_projects.titles.map((title, index) =>{
            return <PythonCard title={title} key={index}/> 
        })

        return(
            <div className="uk-height-1-1 uk-flex flex-container-python">
                {cards}
            </div>

        );  
    }
}