import React from 'react';

const withCounterTop = (Component) => (props) => (
    <>
        <span style={{ position: 'relative', width: 0, color: "#000" }}>
            <span style={{ position: 'absolute', top: "-30px"}}>{props.counter}</span>
        </span>
        <Component {...props} />
    </>
);


export default withCounterTop;