import React, {Component} from 'react';

export default class About extends Component{

    constructor(){
        super();
    }

    render(){
        return(
                <div className="uk-container uk-flex uk-height-viewport uk-padding-large">
                    <div className="uk-container uk-container-large uk-width-1-2">
                        <h1>
                            About
                        </h1>
                        <p>
                            My name is leandro blah blah blah
                        </p>
                    </div>
                    <hr className="uk-divider-vertical uk-padding-small"></hr>
                    <div className="uk-container uk-container-large uk-width-1-2">
                        <h3>
                            Contact me:
                        </h3>
                        <form>
                            <input className="uk-input" type="text"/>
                            <input className="uk-input" type="text"/>
                            <textarea className="uk-textarea"></textarea>
                            <button className="uk-button uk-button-primary uk-align-right">Send</button>
                        </form>
                    </div>
                </div>
        )
    }
}