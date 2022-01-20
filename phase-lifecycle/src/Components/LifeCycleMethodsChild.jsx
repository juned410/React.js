import React, { Component } from 'react';

class LifeCycleMethodsChild extends Component {
    constructor(){
        super()
        console.log("This is Constructor");
    }
    static getDerivedStateFromProps(props,state){
        console.log("This is getDerivedStateFromPropsChild");
    }
    componentDidMount(){
        console.log("This is componentDidMountChild");
    }
    componentDidUpdate(){
        console.log("This is componentDiUpdateChild");
    }
    shouldComponentUpdate(){
        console.log("This is shouldComponentUpdateChild");
        return false;
    }
    getSnapshotBeforeUpdate(){
        console.log("This is getSnapshotBeforeUpdateChild");

    }
       render() {
        console.log("This is RenderChild");
        return (
            <div>
               <h1>Life Cycle Method Child</h1> 
            </div>
        );
    }
}

export default LifeCycleMethodsChild;