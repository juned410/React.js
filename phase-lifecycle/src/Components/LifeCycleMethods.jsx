import React, { Component } from 'react';
import LifeCycleMethodsChild from './LifeCycleMethodsChild';

class LifeCycleMethods extends Component {
    constructor(){
        super()
        console.log("This is Constructor");
    }
    static getDerivedStateFromProps(props,state){
        console.log("This is getDerivedStateFromProps");
    }
    componentDidMount(){
        console.log("This is componentDidMount");
    }
    componentDidUpdate(){
        console.log("This is componentDiUpdate");
    }
    shouldComponentUpdate(){
        console.log("This is shouldComponentUpdate");
        return true;
    }
    getSnapshotBeforeUpdate(){
        console.log("This is getSnapshotBeforeUpdate");

    }
    render() {
        console.log("This is Render");
        return (
            <div>
               <h1>Life Cycle Method</h1> 
               <LifeCycleMethodsChild/>
            </div>
        );
    }
}

export default LifeCycleMethods;