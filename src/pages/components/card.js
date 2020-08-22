import React, { Component } from 'react';

export default class Card extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        
        return (
            <li className={`uk-card uk-card-default 
                            uk-card-body  
                            uk-margin-left 
                            uk-margin-right 
                            uk-container-large
                            ${this.props.className}`}
            >
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
                    <div className="uk-padding cardLinks-container">
                        <div>
                            <p>
                            These classes define the horizontal alignment of flex items and distribute the space between them. 
                            Add one or more of them to the flex container in order to configure the alignments of the flex items.
                            By default, flex items are aligned to the left as does the .uk-flex-left class.
                            </p>
                        </div>
                        <div className="uk-flex uk-flex-column">
                            <a>Live</a>
                            <a>Git Hub</a>
                        </div>
                    </div>
                </div>
            </li>
        )
    }
}