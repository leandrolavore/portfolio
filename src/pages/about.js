import React, {Component} from 'react';
import Loader from './components/loader'

export default class About extends Component{

    constructor(){
        super();

        this.state = {
            mail: {
                name: "",
                email: "",
                subject:"",
                message: ""
            },
            about_json: {}
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        fetch(`${process.env.S3_BUCKET}/jsons/about_json.json`)
            .then(data => data.json())
            .then((json) => {
                this.setState({about_json: json})
            })
    }

    handleChange(event) {
        const {name, value} = event.target;

        this.setState(prevState => ({
            mail:{
                ...prevState.mail,
                [name]: value
            }

        }));
    }

    handleSubmit(e){
        e.preventDefault();
        fetch(process.env.MAIL_API_URL, 
        { 
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              },
            body: 
                JSON.stringify({
                    name: this.state.mail.name, 
                    email: this.state.mail.email,
                    subject: this.state.mail.subject,
                    message: this.state.mail.message
                })
        }).then(()=>{this.clearFields()});
    }
    

    clearFields(){
        this.setState({
            mail: {
                name: "",
                email: "",
                subject:"",
                message: ""
            }
        })
    }

    render(){
        let {about_json} = this.state;

        const renderAboutText = () => {
            if(about_json.text){
                return <p className="about_text">{about_json.text}</p>;
            }
            else{
                return  <Loader/>;
            }
        }

        return(
                <div className="uk-container uk-flex uk-height-viewport uk-padding-large">
                    <div className="uk-container uk-container-large uk-width-1-2">
                        <h1>
                            About
                        </h1>
                        {renderAboutText()}
                    </div>
                    <hr className="uk-divider-vertical uk-padding-small"></hr>
                    <div className="uk-container uk-container-large uk-width-1-2">
                        <h3>
                            Contact me:
                        </h3>
                        <form onSubmit={(e)=>this.handleSubmit(e)}>
                            <div>
                                <span className="uk-label">Name</span>
                                <input 
                                    className="uk-input" 
                                    name="name"
                                    value={this.state.mail.name} 
                                    onChange={this.handleChange} 
                                    type="text"/>
                            </div>
                            <div>
                                <span className="uk-label">E-mail</span>
                                <input 
                                    className="uk-input" 
                                    name="email"
                                    value={this.state.mail.email} 
                                    onChange={this.handleChange} 
                                    type="text"/>
                            </div>
                            <div>
                                <span className="uk-label">Subject</span>
                                <input 
                                    className="uk-input" 
                                    name="subject"
                                    value={this.state.mail.subject} 
                                    onChange={this.handleChange} 
                                    type="text"/>
                            </div>
                            <div>
                                <span className="uk-label">Message</span>
                                <textarea 
                                    className="uk-textarea" 
                                    name="message"
                                    value={this.state.mail.message}  
                                    onChange={this.handleChange}>
                                </textarea>
                            </div>
                            <button className="uk-button uk-button-primary uk-align-right">Send</button>
                        </form>
                    </div>
                </div>
        )
    }
}