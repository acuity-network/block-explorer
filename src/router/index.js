import * as thunks from './thunks';

import Start from '../components/Start';
import Account from '../components/Account';
import Block from '../components/Block';
import Transaction from '../components/Transaction';

export const START = 'router/START';
export const ACCOUNT_DETAIL = 'router/ACCOUNT_DETAIL';
export const BLOCK_DETAIL = 'router/BLOCK_DETAIL';
export const BLOCKS = 'router/BLOCKS';
export const TRANSACTION_DETAIL = 'router/TRANSACTION_DETAIL';
export const TRANSACTIONS = 'router/TRANSACTIONS';

export default {
  [START]: {
    path: '/',
    component: Start,
    thunk: thunks.fetchBlocks,
  },
  [ACCOUNT_DETAIL]: {
    path: '/accounts/:address',
    component: Account,
    thunk: thunks.fetchAccount,
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
  [TRANSACTION_DETAIL]: {
    path: '/transactions/:hash',
    component: Transaction,
    thunk: thunks.fetchTransaction,
  },
  [TRANSACTIONS]: {
    path: '/transactions',
    component: Start,
  },
}
