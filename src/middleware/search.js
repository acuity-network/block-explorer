import * as actions from '../actions/creators';
import * as t from '../actions/types';
import * as web3 from '../adapters/web3';

export default (store, adapter = web3) => next => action => {
  if (action.type === t.CONFIRM_SEARCH) {
    const { query } = action.payload;

    const isAddress = adapter.isAddress(query);
    if (isAddress) {
      return store.dispatch(actions.redirectAccountDetail(query));
    }

    const transaction = adapter.getTransaction(query);
    if (transaction) {
      return store.dispatch(actions.redirectTransactionDetail(query));
    }
  }
  next(action);
}
