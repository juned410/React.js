import React from 'react';
import MappingChild from './MappingChild';
import { data } from './Functional component/Cardreducer';
 
const MappingParent = () => {
    return (
        <div>
            <h1>This is Mapping Parent</h1>
            {data.userData.map((itemCurrent)=>{
                return <MappingChild itemCurrent={itemCurrent}
                 img={itemCurrent.img} 
                 title={itemCurrent.title} 
                 desc={itemCurrent.desc} 
                 />
            })}
            
        </div>
    );
};

export default MappingParent;