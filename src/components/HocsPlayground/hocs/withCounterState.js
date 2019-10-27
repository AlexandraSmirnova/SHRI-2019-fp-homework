import {withState} from 'recompose';

export default withState('counter', 'setCounter', ({ defaultCounter }) => defaultCounter || 0);