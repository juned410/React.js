import React from 'react';
import { filData } from './Functional component/filData';


const Filtered = () => {
    // const finalData=filData;
    const output = filData.data.filter(
        (elem)=> elem.age>200 && elem.gender==="male"
        )
    return (
        <div>
            <h2>Filtered Data</h2>
            {output.map((item)=>{
                return(
                    <div>
                        <h4>Name:{item.name}</h4>
                        <h6>Age:{item.age} </h6>
                        <h6>Gender:{item.gender}</h6>
                    </div>
                );
            })}
        </div>
    );
};

export default Filtered;