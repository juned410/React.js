import React, { useEffect, useState } from 'react';

const UseEffectParent = () => {
    const [data, setData]=useState(0);
    const [text, setText]=useState(0);
    useEffect(()=>{
        console.log ("useEffect Without dependency ")
    
    },[text,data]);

    return (
        <div>
            <h1>LifeCycle Method Using Functional Component {data}</h1>
            <button onClick={() => setData(data +1)} >Update</button>
        </div>
    );
};

export default UseEffectParent;