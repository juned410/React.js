import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";

const NewApi = () => {
  const [info, setInfo] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        console.log("kuch aaya kya?", res.data);
        setInfo(res.data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div style={{display:"flex",flexWrap:"wrap", justifyContent:"center"}}>
      
      {info.map((elem) => {
        return(
            <div style={{height:"450px",width:"400px",borderRadius:"50px", border:"solid 10px black",margin:"20px"}}>
          
              <Card>
                <img
                  src={elem.image}
                  width="200px"
                  height="250px"
                  alt="TAP TO RELOAD"
                />
                <h4>{elem.title}</h4>
                <h4>Category:- {elem.category}</h4>
                {/* <p>{elem.description}</p> */}
              </Card>
              <Button>{elem.price}</Button>
           
        </div>
        );
      })};
    </div>
  );
};

export default NewApi;
