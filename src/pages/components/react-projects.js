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
                            className="react-card uk-card uk-card-body uk-card-default"
                            uk-slider-item={index}
                            key={index}/>;  
        });

        return (
                <div  className="uk-position-relative uk-visible-toggle uk-dark uk-height-1-1" uk-slideshow="ratio: 1:1">
                    <ul className="uk-slideshow-items uk-margin-medium-right uk-margin-medium-left uk-height-1-1">
                        {cards}
                    </ul>
                    <a className="arrow-left uk-hidden-hover" 
                        href="#" 
                        uk-slidenav-previous="1"
                        uk-slideshow-item="previous">
                    </a>
                    <a className="arrow-right uk-hidden-hover" 
                        href="#" 
                        uk-slidenav-next="1" 
                        uk-slideshow-item="next">
                    </a>
                </div>
        )
    }
}


