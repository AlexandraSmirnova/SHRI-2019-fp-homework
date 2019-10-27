import {withHandlers} from 'recompose';

export default withHandlers({
    onClick: ({ onClick, counter, setCounter, defaultCounter }) => () => {
        setCounter(counter === 0 ? defaultCounter : counter - 1);
        if (onClick) {
            onClick();
        }
    },
})