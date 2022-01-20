import React from "react";

export const Child =({info})=>{
    return(
        <div>
            <h3>Hello I am Child Component</h3>
            <h4>Props received from parent: {info} </h4>
        </div>
    )
}