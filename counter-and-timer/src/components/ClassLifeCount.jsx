import React, { Component } from 'react';
import ClassLifeCountChild from './ClassLifeCountChild';

class ClassLifeCount extends Component {
   constructor(){
       super();
       this.state = { count:0};
   }
   handleIncrement=()=>{
       this.setState({count: this.state.count +1});
    };
    componentDidUpdate(){
        document.title = "Chanel"+this.state.count
    }
   render() {
    return (
        <div >
            <h2>Class Component Counter With ComponentDidUpdate</h2>
            <div style={{display:"flex",justifyContent:"center"}}>
                <button onClick={()=> this.setState({count: this.state.count -1})} >Decrement</button>
            <div style={{border:"1px solid black", width:"250px", }}>
                <h1>Count:{this.state.count} </h1>
            </div>
                <ClassLifeCountChild juned={this.handleIncrement}/>
            </div>
        </div>
    );
  }
}

export default ClassLifeCount;