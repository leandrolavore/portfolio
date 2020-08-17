import React, {Component} from 'react';

export default class About extends Component{

    constructor(){
        super();

        this.state = {
            mail: {
                name: "",
                email: "",
                subject:"",
                message: ""
            }
        }
    }

    handleSubmit(){
        client.sendEmail({
            to: process.env.MY_MAIL,
            from: this.state.mail.email,
            subject: this.state.mail.subject,
            message: this.state.mail.message
           });
        //clean inputs
    }

    render(){
        return(
                <div className="uk-container uk-flex uk-height-viewport uk-padding-large">
                    <div className="uk-container uk-container-large uk-width-1-2">
                        <h1>
                            About
                        </h1>
                        <p>
                            My name is leandro blah blah blah
                        </p>
                    </div>
                    <hr className="uk-divider-vertical uk-padding-small"></hr>
                    <div className="uk-container uk-container-large uk-width-1-2">
                        <h3>
                            Contact me:
                        </h3>
                        <form onSubmit={this.handleSubmit}>
                            <input className="uk-input" value={this.state.mail.name} type="text"/>
                            <input className="uk-input" value={this.state.mail.email} type="text"/>
                            <input className="uk-input" value={this.state.mail.subject} type="text"/>
                            <textarea className="uk-textarea" value={this.state.mail.message}></textarea>
                            <button className="uk-button uk-button-primary uk-align-right">Send</button>
                        </form>
                    </div>
                </div>
        )
    }
}