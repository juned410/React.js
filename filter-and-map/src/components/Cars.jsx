import React, { useState } from 'react';
import { product } from './DATA/infor';
const Cars = () => {
    const [prod, setProd]=useState(product.data);
    const [text, setText]=useState("");
    const handleFiltered =()=> {
    const filtProd = product.data.filter((elem)=> elem.name.toLowerCase().includes(text.toLowerCase().trim()) );
    (text!== "")? setProd(filtProd) : setProd(product.data)
    };
    return (
        <div>
            <div>
                <input onChange={(e)=> setText(e.target.value)} type="Search" placeholder="Search Here..." />
                <button onClick={handleFiltered} >Search</button>
            </div> 
            <div>
                {prod.map((jun)=>{
                    return(
                        <div>
                            <img src={jun.url} width="300px" alt="" />
                            <h3>Name:{jun.name}</h3>
                            <h4>Price:<b>{jun.price}</b>{" "}</h4>
                            <p>Type:{jun.type}</p>
                        </div>
                    )
                })}
            </div> 
        </div>
    );
};

export default Cars;