import React, {Component} from "react";

export class ChildPropss extends Component{
    constructor(){
        super();
        
    }
    render(){
        return(
            <div>
                <h1>Hello this is Child Component</h1>
                <h2>Hello {this.props.eknaam}</h2>
            </div>
        );
    };
};