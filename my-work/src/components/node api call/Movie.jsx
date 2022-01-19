import { useState, useEffect } from 'react';
import axios from 'axios';

const Movie = () => {
    const [movie, setMovie] = useState([]);
    const getData = async() =>{
        const result = await axios.get("http://localhost:3030/")
        setMovie(result.data.data)
    }
    useEffect(()=>{
        getData();
    }, [])
    return (
        <div>
            <h1>Hello movie</h1>
            <div>
            {movie.map((item) =>{
                return(
                    <div>
                        <img src={item.url} alt="" />
                        <h1>Title:{item.name}</h1>
                        <h2>price:{item.price}</h2>
                    </div>
                )
            })}
            </div>
        </div>
    );
};

export default Movie;