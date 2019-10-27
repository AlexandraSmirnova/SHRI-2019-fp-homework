import {withHandlers} from 'recompose';


export default withHandlers({
    onClick: ({setInnerColor, setOuterColor}) => () => {
        setInnerColor('orange');
        setOuterColor('orange');
    },
});
