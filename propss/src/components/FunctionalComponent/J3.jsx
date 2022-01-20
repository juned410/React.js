import React from "react";
import { child } from "./J2";

export const Grandchild =()=>{
    return(
        <div>
            <h1>This is parent Component</h1>
            <h3>moble no {mob}</h3>
            <child mob= {mob}/>
        </div>
    )
}