import React, { Component } from 'react';
import Card from './card.js';

export default class ReactProjects extends Component {

    constructor() {
        super();

        this.state = {
            videos: [
                "Music",
                "NoW",
                "Tower",
                "Users"
            ],
        }
    }

    render() {

        let cards = this.state.videos.map((video, index)=>{ 
            return <Card    name={video}
                            className="uk-card uk-card-body uk-card-default uk-card-large"
                            uk-slider-item={index}
                            key={index}/>;  
        });

        return (
                <div  className="uk-position-relative uk-visible-toggle uk-dark " uk-slideshow="ratio: 7:3">
                    <ul className="uk-slideshow-items uk-margin-medium-right uk-margin-medium-left">
                        {cards}
                    </ul>
                    <a className="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous="1" uk-slideshow-item="previous"></a>
                    <a className="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next="1" uk-slideshow-item="next"></a>
                </div>
        )
    }
}


