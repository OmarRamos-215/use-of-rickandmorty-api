import React from 'react';
import './sample.css';

const Sample = (props) => {
    console.log(props)
    return( 
    <React.Fragment>
        <h3>{props.message}</h3>
        <p>made with react</p>
    </React.Fragment>
    )
};

export default Sample;