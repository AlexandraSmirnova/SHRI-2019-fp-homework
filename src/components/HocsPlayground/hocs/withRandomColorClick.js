import { withHandlers } from "recompose";


const COLORS = ['orange', 'red', 'blue', 'yellow'];

export default withHandlers({
    onClick: ({setInnerColor, setOuterColor}) => () => {
        const randomNumber = Math.floor(Math.random() * 4);
        const color = COLORS[randomNumber];
        setInnerColor(color);
        setOuterColor(color);
    },
});