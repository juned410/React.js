import React from 'react';
import ContextChild2 from './ContextChild2';

const ContextChild1 = () => {
    return (
        <div>
            <h1>Hello iam child 1</h1>
            <ContextChild2/>
        </div>
    );
};

export default ContextChild1;