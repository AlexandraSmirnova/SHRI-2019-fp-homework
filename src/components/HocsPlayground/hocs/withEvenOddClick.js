import {branch} from 'recompose';
import withOnClickRoundsGray from './withOnClickRoundsGray';
import withOnClickRoundsGreen from './withOnClickRoundsGreen';
 
export default branch(
    ({ counter }) => counter % 2,
    withOnClickRoundsGray,
    withOnClickRoundsGreen
)