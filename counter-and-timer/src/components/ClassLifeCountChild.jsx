import React, { Component } from 'react';

class ClassLifeCountChild extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.juned}>Increment</button>
            </div>                

        );
    }
}

export default ClassLifeCountChild;