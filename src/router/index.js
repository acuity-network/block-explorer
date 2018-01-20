import * as thunks from './thunks';

import Start from '../components/Start';
import Block from '../components/Block';

export const START = 'router/START';
export const BLOCKS = 'router/BLOCKS';
export const BLOCK_DETAIL = 'router/BLOCK_DETAIL';

export default {
  [START]: {
    path: '/',
    component: Start,
    thunk: thunks.fetchBlocks,
  },
  [BLOCKS]: {
    path: '/blocks',
    component: Start,
    thunk: thunks.fetchBlocks,
  },
  [BLOCK_DETAIL]: {
    path: '/blocks/:blockNumber',
    component: Block,
    thunk: thunks.fetchSingleBlock,
  },
}
