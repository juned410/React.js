import React, {Component} from "react";
import { ChildPropss } from "./ChildPropss";

export class ParentPropss extends Component{
    constructor(){
        super();
        this.state ={
           name: "John",
        }
    }
    render(){
        return(
            <div>
                <h1>Hello {this.state.name}</h1>
                <ChildPropss eknaam={this.state.name}/>
            </div>
        );
    };
};