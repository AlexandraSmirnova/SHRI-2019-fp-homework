import {withHandlers} from 'recompose';

export default withHandlers({
    onClick: ({ onClick, rotation, setRotation }) => () => {
        setRotation(rotation >= 360 ? 0 : rotation + 30);
        if (onClick) { 
            onClick();
        }
    },
})