import React, { Component } from 'react';
import {Link} from 'react-router-dom';
export default class Navbar extends Component {

    constructor() {
        super();

        this.state = {
            tabs: [
                {title: 'React', isActive: true}, 
                {title: 'Python', isActive: false}, 
                {title: 'Experience', isActive: false},
                {title: 'About', isActive: false}
            ],
        }
        this.setActive = this.setActive.bind(this);
    }

    setActive(e){
        e.persist();
        let tabsCopy = this.state.tabs.map(tab => tab.title.toLowerCase() == e.target.innerHTML.toLowerCase() 
                                                                    ? {title: tab.title, isActive: true} 
                                                                    : {title: tab.title, isActive: false} );
         
        this.setState({tabs: tabsCopy});
    }

    render() {
        let tabs =  this.state.tabs && this.state.tabs.map(tab => 
                        <li 
                            className={`tab-link ${tab.isActive ? "uk-active" : ""}`} 
                            onClick={(e) => this.setActive(e)}
                        >
                            <Link to={`${tab.title.toLowerCase()}`}>
                                {tab.title}
                            </Link>
                        </li>
                    );

        return (
            <nav className="uk-background-default tab-nav">
                <ul className="uk-tab">
                    {tabs}
                </ul>
            </nav>
        )
    }
}