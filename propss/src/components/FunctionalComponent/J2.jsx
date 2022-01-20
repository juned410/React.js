import React from "react";
import { Grandchild } from "./J3";

export const Child =(id,mob)=>{
    return(
        <div>
            <h1>This is parent Component</h1>
            <h3>my id is {id}</h3>
            <Grandchild mob={mob}/>
        </div>
    )
}