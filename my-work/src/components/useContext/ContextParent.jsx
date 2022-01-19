import React, {createContext} from 'react';
import ContextChild1 from './ContextChild1';

export const Sendinfo = createContext();
export const Sendinfo2 = createContext();
const ContextParent = () => {
    // console.log("create context --->", sendData);
    const name = "Hi Juned";
    const age = 20;
    return (
        <div>
            <h1>Hello i am Parent</h1>
            <Sendinfo.Provider value={name}>
            <Sendinfo2.Provider value={age}>
            <ContextChild1/>         
            </Sendinfo2.Provider>
            </Sendinfo.Provider>
        </div>
    );
};

export default ContextParent;


















































































// export const sendData = createContext();
// export const sendData2 = createContext();