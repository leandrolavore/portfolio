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
        this.decreaseFocusedCard = this.decreaseFocusedCard.bind(this);
        this.incrementFocusedCard = this.incrementFocusedCard.bind(this);
    }

    decreaseFocusedCard() {
        this.setState({focusedCard: --this.state.focusedCard});
    }

    incrementFocusedCard() {
        this.setState({focusedCard: ++this.state.focusedCard});
    }


    render() {
        let card = <Card name={this.state.videos[this.state.focusedCard]}
                         className="card"/>;

        let prevCard = this.state.focusedCard > 0   ? <Card 
                                                        name={this.state.videos[this.state.focusedCard - 1]}
                                                        className="card prevCard animateCard"/>
                                                    : '';

        let nextCard = this.state.focusedCard < 3   ? <Card 
                                                        name={this.state.videos[this.state.focusedCard + 1]}
                                                        className="card nextCard animateCard"/> 
                                                    : '';;

        let upperButton = this.state.focusedCard > 0
            ? <button onClick={this.decreaseFocusedCard} className="uk-button-default button uk-align-center">
                <i uk-icon="chevron-up"></i>
            </button>
            : '';

        let bottomButton = this.state.focusedCard < this.state.videos.length - 1
            ? <button onClick={this.incrementFocusedCard} className="uk-button-default scroll-down button uk-align-center">
                <i uk-icon="chevron-down"></i>
              </button>

            : '';

        return (
            <div className="uk-flex uk-height-1-1 port-container">
                <div className="uk-container uk-container-large uk-width-1-2 text">
                    This was the first App that I started from scratch, not following any tutorial, so it is when I got a more conscious understanding of Life-Cycle methods, and functional programming. This one forced me to go to the documentation, and to abandon the preconceptions I had coming from Object Oriented programming like Java.

                    I wanted to create a News App, that could identify the user's location and serve news from that specific country.

                    So I used the nav-geolocation coordinates from the browser, then I used the reverse-geocoding service from Google Maps API, to obtain the country's name. Then I would contact the News API, get the json data result, and FILTER the news getting only the ones that contained that country's name in the response. (In the Json file "country": "Argentina"). In order to make it work properly and avoid any loops or my renders falling behind, I put all that process in the ComponentDidMount method. I didn't store any value as property, just kept it functional.

                </div>
                <hr className="uk-divider-vertical uk-height-1-1 vertical"></hr>
                <div className="overlay"></div>
                <div className="uk-width-1-2 slider">
                     {upperButton}
                        {prevCard}
                            {card}
                        {nextCard}
                    {bottomButton}
                </div>
            </div>
        )
    }
}


