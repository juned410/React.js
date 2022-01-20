import React from 'react';
import {Card} from 'react-bootstrap'

const MappingChild = ({itemCurrent}) => {
    return (
        <div style= {{float :"left", padding:"50px 170px "}}>
            {/* <h1>This is Mapping Child Component</h1> */}
            <Card style={{ width: "334px", height:"450px", border: "25px groove gray", padding:"10px" }}>
                <img style={{width:"334px", height:"200px"}} src={itemCurrent.img} width="200px" alt="" />
                <h2>{itemCurrent.title}</h2>
                <p>{itemCurrent.desc}</p>
            </Card>
            
            
        </div>
    );
};

export default MappingChild;