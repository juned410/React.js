import React, { useState, useEffect } from 'react';
import axios from 'axios;'
const Address = () => {
    const [data,setData]= useState([]);
    const getData = async() =>{
        const myAdd = await axios.post("http://localhost:3030/addnumber"),{
            
        }
    }
    return (
        <div>
            <h1>MyAddress</h1>
        </div>
    );
};

export default Address;