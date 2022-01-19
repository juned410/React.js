import React, { useContext } from 'react';
import { Sendinfo, Sendinfo2 } from "./ContextParent"

const ContextChild3 = () => {
    
    const age= useContext(Sendinfo2);
    // const name= useContext(Sendinfo);
    return (
        <div>
            <h1>hello i am Child3</h1>
            <Sendinfo.Consumer>
                {first=>{
                   return <h4>Name: {first} </h4>;
                }}
            </Sendinfo.Consumer>
             {/* <h4>Name: {name} </h4>; */}
            <h4>Age: {age} </h4>
        </div>
    );
};

export default ContextChild3;





















































































{/* <sendData.Consumer>
    {
      first =>{
          return (
              <sendData2.Consumer>
                { second =>{
                    return <h3>Recieve Data from Parent:     |{first} are you {second}year Old ? </h3>;
                  }
                }
              </sendData2.Consumer>
          )
      }  
    }
</sendData.Consumer> */}