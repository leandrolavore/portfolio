import React, { Component } from 'react';

export default class Experience extends Component {
    constructor(){
        super();

    }

    render(){
        
        return(
            <div className="uk-grid uk-grid-small uk-width-1-1 uk-margin-large exp-grid">
                <div className="uk-width-2-3">
                    <div className="uk-card uk-card-default uk-card-body  uk-height-1-1">
                        <h3 className="uk-heading-bullet">First steps</h3>
                        <p>
                            This is the web-scrapper I used to create my Tower services DB.
                            The program reads through an XML site with namespaces.
                            The data is directly parsed into a Json file that I uploaded to Mongo
                        </p>
                    </div>
                </div>
                <div className="uk-width-1-3">
                    <div className="uk-card uk-card-default uk-card-body">
                        <h3 className="uk-heading-bullet">Python</h3>
                        <p>
                            This is the web-scrapper I used to create my Tower services DB.
                            The program reads through an XML site with namespaces.
                            The data is directly parsed into a Json file that I uploaded to Mongo
                        </p>
                    </div>
                </div>
                <div className="uk-width-1-1 uk-margin-medium-top">
                    <div className="uk-card uk-card-default uk-card-body">
                        <h3 className="uk-heading-bullet">First job:</h3>
                        <p>
                            This is the web-scrapper I used to create my Tower services DB.
                            The program reads through an XML site with namespaces.
                            The data is directly parsed into a Json file that I uploaded to Mongo
                        </p>
                    </div>
                </div>
                <div className="uk-width-1-3  uk-margin-small-top">
                    <div className="uk-card uk-card-default uk-card-body">
                        <h3 className="uk-heading-bullet">Debugging</h3>
                        <p>
                            This is the web-scrapper I used to create my Tower services DB.
                            The program reads through an XML site with namespaces.
                            The data is directly parsed into a Json file that I uploaded to Mongo
                        </p>
                    </div>
                </div>
                <div className="uk-width-1-3  uk-margin-small-top">
                    <div className="uk-card uk-card-default uk-card-body">
                        <h3 className="uk-heading-bullet">Refactoring</h3>
                        <p>
                            This is the web-scrapper I used to create my Tower services DB.
                            The program reads through an XML site with namespaces.
                            The data is directly parsed into a Json file that I uploaded to Mongo
                        </p>
                    </div>
                </div>
                <div className="uk-width-1-3 uk-margin-small-top">
                    <div className="uk-card uk-card-default uk-card-body">
                        <h3 className="uk-heading-bullet">Modeling</h3>
                        <p>
                            This is the web-scrapper I used to create my Tower services DB.
                            The program reads through an XML site with namespaces.
                            The data is directly parsed into a Json file that I uploaded to Mongo
                        </p>
                    </div>
                </div>
                <div className="uk-width-1-2  uk-margin-small-top">
                    <div className="uk-card uk-card-default uk-card-body">
                        <h3 className="uk-heading-bullet">PHP</h3>
                        <p>
                            This is the web-scrapper I used to create my Tower services DB.
                            The program reads through an XML site with namespaces.
                            The data is directly parsed into a Json file that I uploaded to Mongo
                        </p>
                    </div>
                </div>
                <div className="uk-width-1-2  uk-margin-small-top">
                    <div className="uk-card uk-card-default uk-card-body">
                        <h3 className="uk-heading-bullet">Git/CI</h3>
                        <p>
                            This is the web-scrapper I used to create my Tower services DB.
                            The program reads through an XML site with namespaces.
                            The data is directly parsed into a Json file that I uploaded to Mongo
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}