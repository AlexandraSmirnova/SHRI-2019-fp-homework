/**
 * Необходимо имплементировать компонент и его логику путем композиции хоков и stateless компонента BaseButton
 */
import {compose, branch} from 'recompose';
import BaseButton from './BaseButton';
import withDefaultColor from '../hocs/withDefaultColor';
import withDefaultCounter from '../hocs/withDefaultCounter';
import withCounterState from '../hocs/withCounterState';
import withDecrementCounter from '../hocs/withDecrementCounter';
import withCounterTop from '../hocs/withCounterTop';
import withOnClickRoundsOrange from '../hocs/withOnClickRoundsOrange';


export default compose(
    withDefaultColor,
    withDefaultCounter,
    withCounterState,
    branch(
        ({ counter }) => counter === 0,
        withOnClickRoundsOrange,
    ),
    withDecrementCounter
)(withCounterTop(BaseButton))
