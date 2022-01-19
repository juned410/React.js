import React from 'react';
import ContextChild3 from './ContextChild3';

const ContextChild2 = () => {
    return (
        <div>
            <h1>Hello i am Child2</h1>
            <ContextChild3/>
        </div>
    );
};

export default ContextChild2;