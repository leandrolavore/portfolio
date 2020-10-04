import React, { Component } from 'react';
import Loader from './loader.js';

export default class Card extends Component {
    constructor(props) {
        super(props);

        this.state = {
           isLoading: true, 
           project: {}
        }
    }

    componentDidMount() {
        if(this.props.name){
            fetch(`${process.env.S3_BUCKET}/jsons/${this.props.name}.json`)
            .then(data => data.json())
            .then((json) => {
                this.setState({project: json})
            })
        }
    }


    render() {
        const {project} = this.state;
        const renderVideo = () => {
            if(project.name){
                return <video src={`${S3_BUCKET}/${project.name}.mp4`} 
                        className="video"
                        autoPlay 
                        loop 
                        controls 
                        muted      
                        >   
                        </video>;
            }else{
                return <Loader/>;
            }
        }
        
        return project != {} ? 
            <li className={`uk-card uk-card-default 
                            uk-card-body  
                            uk-margin-left 
                            uk-margin-right 
                            uk-container-large
                            ${this.props.className}`}
            >
                <h3 className="uk-card-title">{project.name}</h3>
                <div className="uk-flex">
                    {renderVideo()}
                    <div className="uk-padding cardLinks-container">
                        <div>
                            <p>
                                {project.desc}
                            </p>
                        </div>
                        <div className="uk-flex uk-flex-column">
                            <a href={project.live} target="_blank">Live</a>
                            <a href={project.git} target="_blank">Git Hub</a>
                        </div>
                    </div>
                </div>
            </li>
            
        :

            <Loader/>
    }
}