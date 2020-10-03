import React, {Component} from 'react';

export default class Loader extends Component {

    constructor(){
        super();
    }

    render(){
        
        return(
            <div uk-spinner="ratio: 2"></div>
        )
    }
}