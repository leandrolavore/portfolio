import React, { Component } from 'react';
import PythonCard from './python-card';

export default class PythonProjects extends Component {

    constructor(){
        super();
        this.state = {   
                title : "Web-scrapper",
                text : `This is the web-scrapper I used to create my Tower services DB. 
                The program reads through an XML site with namespaces. 
                The data is directly parsed into a Json file that I uploaded to Mongo`,
                src : 'src'
        };
    }

    render(){
        return(
            <div className="uk-height-1-1 uk-flex flex-container-python">
                <PythonCard title={this.state.title} text={this.state.text} src={this.state.src}/> 
                <PythonCard title={this.state.title} text={this.state.text} src={this.state.src}/>
                <PythonCard title={this.state.title} text={this.state.text} src={this.state.src}/>
                <PythonCard title={this.state.title} text={this.state.text} src={this.state.src}/>
            </div>

        );  
    }
}