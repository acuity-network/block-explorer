import * as actions from '../actions/creators';
import * as t from '../actions/types';
import * as web3 from '../adapters/web3';

export default (store, adapter = web3) => next => async action => {
  if (action.type === t.SEARCH_FOR) {
    const { query } = action.payload;

    const isAddress = adapter.isAddress(query);
    if (isAddress) {
      return store.dispatch(actions.redirectAccountDetail(query));
    }

    const transaction = await adapter.getTransaction(query);
    if (transaction) {
      store.dispatch(actions.fetchTransactionSuccess(transaction));
      return store.dispatch(actions.redirectTransactionDetail(query));
    }
  }

  next(action);
}
