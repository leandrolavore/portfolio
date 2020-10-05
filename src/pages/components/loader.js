import React, {Component} from 'react';

export default class Loader extends Component {

    constructor(){
        super();
    }

    render(){
        
        return(
            <div className="overlay uk-width-1-2">
                <img src="" alt=""></img>
                <div class="uk-overlay-default uk-position-cover">
                    <div uk-spinner="ratio: 2"></div>
                </div>
            </div>
        )
    }
}