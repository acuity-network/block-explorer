import * as actions from '../actions/creators'
import * as t from '../actions/types';
import * as web3 from '../adapters/web3';

export default (store, adapter = web3) => next => async action => {
  if (action.type === t.FETCH_TRANSACTION) {
    const { hash } = action.payload;

    const transaction = await adapter.getTransaction(hash);

    store.dispatch(actions.fetchTransactionSuccess(transaction));

  } else {
    next(action);
  }
}
