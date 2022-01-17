import React, { useState } from 'react';

export const ToggleClr = () => {
    const [clr,setClr]=useState("navy")
    return (
        <div style={{background:clr}}>
            <button onClick={()=>setClr(clr==="yellow"? "red":"yellow")}>
                {clr==="yellow"?"Change Me to red" : "Change Me to yellow"}</button>
        </div>
    );
};