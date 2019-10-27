import {withHandlers} from 'recompose';

export default withHandlers({
    onClick: ({ onClick, counter, setCounter }) => () => {
        setCounter(counter + 1);
        if (onClick) { 
            onClick();
        }
    },
})