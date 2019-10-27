import {withHandlers} from 'recompose';


export default withHandlers({
    onClick: ({setInnerColor, setOuterColor}) => () => {
        setInnerColor('green');
        setOuterColor('green');
    },
});
