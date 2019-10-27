/**
 * Необходимо имплементировать компонент и его логику путем композиции хоков и stateless компонента BaseButton
 */
import {compose, branch} from 'recompose';
import BaseButton from './BaseButton';
import withPrimaryColor from '../hocs/withPrimaryColor';
import withRandomColorClick from '../hocs/withRandomColorClick';
import withLargeSize from '../hocs/withLargeSize';
import withRotationState from '../hocs/withRotationState';
import withOnClickRotate from '../hocs/withOnClickRotate';
import withRotateElement from '../hocs/withRotationElement';


export default compose(
    withLargeSize,
    withPrimaryColor,
    withRotationState,
    branch(
        ({ rotation }) => rotation === 360,
        withRandomColorClick,
    ),
    withOnClickRotate
)(withRotateElement(BaseButton))
