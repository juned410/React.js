import React from "react";
import { Child } from "./J2";

export const Parent =({name, id, mob})=>{
    return(
        <div>
            <h1>This is parent Component</h1>
            <h3>My Name is {name} </h3>
            <Child id={id} mob={mob}/>
        </div>
    )
}