import React, { Component } from 'react';

export class ClassTimer extends Component {
    constructor(props){
        super(props);
        this.state = {hour:0, min: 0 , sec:0 };
    }
    Kuchbhi;
    componentDidMount(){
        this.Kuchbhi = setInterval(()=>{
            this.setState((prevState) => ({sec: prevState.sec +1}))
        },1000);
        this.Kuchbhi = setInterval(()=>{
            this.setState((prevState) => ({min: prevState.min +1}))
        },60000);
        this.Kuchbhi = setInterval(()=>{
            this.setState((prevState) => ({hour: prevState.hour +1}))
        },60000*60);
    }
    render() {
        return (
            <div>
                <h1>Class Timer:  {this.state.hour}:{this.state.min}:{this.state.sec}</h1>
                <button onClick={() => clearInterval(this.Kuchbhi)} >Clear</button>
            </div>
        );
    }
}

