import * as t from '../actions/types';
import * as web3 from '../adapters/web3';

export default (store, adapter = web3) => next => action => {
  if (action.type === t.FETCH_ACCOUNT) {
    const { address } = action.payload;

  }
  next(action);
}
