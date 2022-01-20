import React, { useEffect, useState } from 'react';
import { useRef } from 'react/cjs/react.development';

const FunctionalTimer = () => {
    const intervalRef = useRef();
    const [hour, setHour] = useState(0);
    const [min, setMin] = useState(0);
    const [sec, setSec] = useState(0);
    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setHour((prevState) => prevState + 1);
        },60000*60)
        intervalRef.current = setInterval(() => {
            setMin((prevState) => prevState + 1);
        },60000)
        intervalRef.current = setInterval(() => {
            setSec((prevState) => prevState + 1 );
        },1000)
        return ()=> clearInterval(intervalRef.current);
    },[]);
    return (
        <div>
            <h1>Hello Function Component Timer!</h1>
            <h2 style={{background:"yellow",border:"solid 5px orange",margin:"0px 500px  "}}>
                Functional Timer : {hour}:{min}:{sec}</h2>
            <button  onClick={() => clearInterval(intervalRef.current)}> Clear Timer</button>
        </div>
    );
};

export default FunctionalTimer;