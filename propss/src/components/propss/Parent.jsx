import React from "react";
import { Child } from "./Child";

export const Parent=()=>{
    const data = "abcd1234";
    return(
        <div>
            <h2>Hello I am Parent Component</h2>
            <Child info={data} />
        </div>
    )
}