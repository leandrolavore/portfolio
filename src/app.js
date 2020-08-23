import React, { Component } from 'react';
import About from './pages/about';
import css from '../public/styles/app.css';
import Navbar from './pages/components/navbar';
import Router from './router.js'
import { Scrollbars } from 'react-custom-scrollbars';

export default class App extends Component {

    constructor() {
        super();
    }

    render() {

        return (
            <div id="App">
                <Navbar/>
                <Scrollbars style={{height: "100%" }} autoHide>
                    <Router/>
                </Scrollbars>
            </div>
        )
    }
}

