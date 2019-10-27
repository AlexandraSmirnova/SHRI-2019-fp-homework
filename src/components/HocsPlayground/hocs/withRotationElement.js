import React from 'react';

const withRotateElement= (Component) => (props) => (
    <div style={{ transform: `rotate(${props.rotation || 0 }deg)`, display: "inline-block" }}>
        <Component {...props} />
    </div>
);


export default withRotateElement;