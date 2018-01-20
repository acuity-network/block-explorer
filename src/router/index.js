import * as thunks from './thunks';

import Start from '../components/Start';
import Block from '../components/Block';

export const START = 'router/START';
export const BLOCK = 'router/BLOCK';

export default {
  [START]: {
    path: '/',
    component: Start,
  },
  [BLOCK]: {
    path: '/blocks/:blockNumber',
    component: Block,
    thunk: thunks.fetchBlock,
  },
}
