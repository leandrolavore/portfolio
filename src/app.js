import React, { Component } from 'react';
import About from './pages/About';
import css from '../public/styles/app.css';
import Navbar from './pages/components/navbar';
import Router from './Router.js'
import { Scrollbars } from 'react-custom-scrollbars';

export default class App extends Component {

    constructor() {
        super();
    }

    render() {
        console.log(process.env.S3_BUCKET)
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

