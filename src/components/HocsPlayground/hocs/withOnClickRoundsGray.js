import {withHandlers} from 'recompose';


export default withHandlers({
    onClick: ({setInnerColor, setOuterColor}) => () => {
        setInnerColor('gray');
        setOuterColor('gray');
    },
});
