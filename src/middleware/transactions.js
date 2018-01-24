import * as actions from '../actions/creators'
import * as t from '../actions/types';
import * as web3 from '../adapters/web3';

export default (store, adapter = web3) => next => async action => {
  if (action.type === t.FETCH_TRANSACTIONS) {
    const { hashes } = action.payload;

    const fetchedTransactions = await adapter.getTransactions(hashes);
    const transactions = {};

    fetchedTransactions.forEach(transaction => {
      transactions[transaction.hash] = transaction;
    });

    store.dispatch(actions.fetchTransactionsSuccess(transactions));
  } else {
    next(action);
  }
}
