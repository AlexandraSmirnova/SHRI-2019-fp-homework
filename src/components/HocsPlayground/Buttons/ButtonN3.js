/**
 * Необходимо имплементировать компонент и его логику путем композиции хоков и stateless компонента BaseButton
 */
import {compose} from 'recompose';
import BaseButton from './BaseButton';
import withIncrementCounter from '../hocs/withIncrementCounter';
import withEvenOddClick from '../hocs/withEvenOddClick';
import withPrimaryColor from '../hocs/withPrimaryColor';
import withCounterState from '../hocs/withCounterState';
import withCounterLeft from '../hocs/withCounterLeft';

export default compose(
    withCounterState,
    withPrimaryColor,
    withEvenOddClick,
    withIncrementCounter
)(withCounterLeft(BaseButton))
