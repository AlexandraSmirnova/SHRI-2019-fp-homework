
import React from 'react';

const withCounterLeft = (Component) => (props) => (
    <Component {...props} >
        {props.children} <span>{props.counter}</span>
    </Component>
);


export default withCounterLeft;