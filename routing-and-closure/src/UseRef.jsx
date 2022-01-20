import React, { useEffect, useRef } from 'react';

const UseRef = () => {
    const inputRef = useRef();
    const buttonRef = useRef();
    useEffect(()=>{
        inputRef.current.focus()
    },[])
    return (
        <div>
             <h1>Hello useRef!</h1>
            <input ref={inputRef} type="text" />
            <button ref={buttonRef} >Submit</button>
        </div>
    );
};

export default UseRef;