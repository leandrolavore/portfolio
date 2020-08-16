import React, { Component} from 'react';

export default class PythonCard extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className='uk-width-1-4 uk-flex uk-flex-column python-band'>
                <i className="uk-flex-top python-icon" uk-icon="search"></i>
                <div>
                    <h1 className="uk-text-lead uk-text-center python-title">
                    <span className="python-span">{this.props.title}</span>
                    </h1>
                    <p className="uk-text-meta python-text">
                        {this.props.text}
                    </p>
                </div>
                <a className="uk-flex-bottom uk-button uk-button-default uk-button-small" href="">See the code</a>
            </div>  
        );
    }
}