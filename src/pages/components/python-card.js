import React, { Component} from 'react';

export default class PythonCard extends Component{

    constructor(props){
        super(props);

        this.state = {
            isLoading: true, 
            project: {}
         }
    }

    componentDidMount() {
        fetch(`${process.env.S3_BUCKET}/jsons/${this.props.title.toLowerCase()}.json`)
            .then(data => data.json())
            .then((json) => {
                this.setState({project: json})
            })
    }

    render(){
        const {project, isLoading} = this.state;

        return( project != {}
                    ?
                        <div className='uk-width-1-4 uk-flex uk-flex-column python-band'>
                            <i className="uk-flex-top python-icon" uk-icon="search"></i>
                            <div>
                                <h1 className="uk-text-lead uk-text-center python-title">
                                <span className="python-span">{project.name}</span>
                                </h1>
                                <p className="uk-text-meta python-text">
                                    {project.desc}
                                </p>
                            </div>
                            <a className="uk-flex-bottom uk-button uk-button-default uk-button-small" 
                                href={project.git}
                                target="_blank">See the code</a>
                        </div>  
                    :

                        <h1>Loading ...</h1>
        );
    }
}