import axios from 'axios';
import React, { useEffect, useState } from 'react';

export const ApiCall = () => {
    const [albums, setAlbums]= useState([]);
    useEffect(()=>{
        axios
        .get("https://jsonplaceholder.typicode.com/albums")
        .then((res)=>{
            console.log("response object check---->",res.data);
            setAlbums(res.data);
        })
        .catch((error)=> console.log("Samajh me aaya kya ?", error));
    },[])
    return (
        <div>
            <h2>Fetching Data From API</h2>
            <h2>Welcome Data!</h2>
           <div style={{display:"flex", flexWrap:"wrap"}}>
                {albums.map((KyaName)=>{
                            return(
                            <div style={{backgroundColor:"lightblue",width:"200px",margin:"10px"}}>
                                <p>{KyaName.id}</p>
                                <h4>{KyaName.title}</h4>
                            </div> 
                            );
                        })}
           </div>
        </div>
    );
};


// export default ApiCall;