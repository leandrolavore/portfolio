import React, { Component } from 'react';

export default class Card extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        
        return (
            <li className={`uk-card uk-card-default uk-card-body ${this.props.className
            }`}>
                <h3 className="uk-card-title">{this.props.name}</h3>
                <div className="uk-flex">
                    <video src={`${process.env.S3_BUCKET}/${this.props.name}.mp4`} 
                            className="video"
                            autoPlay 
                            loop 
                            controls 
                            muted      
                    >   
                    </video>
                    <div className="cardLinks-container">
                        <a>Live</a>
                        <a>Git Hub</a>
                    </div>
                </div>
            </li>
        )
    }
}