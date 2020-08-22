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
            focusedCard: 0
        }
    }

    render() {

        let cards = this.state.videos.map((video, index)=>{ 
            return <Card    name={video}
                            className="uk-card uk-card-body uk-card-default uk-card-large"
                            uk-slider-item={index}/>;  
        });

        return (
                <div className="uk-slider">
                    <a href="" className="uk-slidenav-large uk-position-center-left-out" uk-slidenav-previous></a>
                    <a href="" className="uk-slidenav-large uk-position-center-right-out" uk-slidenav-next></a>
                    <ul className="uk-slider-items">
                        {cards}
                    </ul>
                </div>
        )
    }
}


