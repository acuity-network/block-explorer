import * as actions from '@/actions/creators';
import * as t from '@/actions/types';
import * as web3 from '@/adapters/web3';
import { getHistoryInstance } from '@/adapters/history';

export default (store, adapter = web3, getHistory = getHistoryInstance) => next => async action => {
  if (action.type === t.SEARCH_FOR) {
    const { query } = action.payload;
    const history = getHistory();

    const isAddress = adapter.isAddress(query);
    if (isAddress) {
      return history.push(`/address/${query}`);
    }

    try {
      const blockArray = await adapter.getBlocks([query]);
      if (blockArray.length === 1) {
        const block = blockArray[0];
        store.dispatch(actions.fetchBlocksSuccess([block.number.toString()], { [block.number]: block }));
        return history.push(`/block/${block.number}`);
      }
    } catch(e) {
      // handled after trying all data types
    }

    if (query.substring(0, 2) === '0x' && query.length === 66) {
      try {
        const transactionArray = await adapter.getTransactions([query]);
        if (transactionArray.length === 1) {
          const transaction = transactionArray[0];
          store.dispatch(actions.fetchTransactionsSuccess({ [transaction.hash]: transaction }));
          return history.push(`/transaction/${transaction.hash}`);
        }
      } catch(e) {
        // handled after trying all data types
      }
    }

    store.dispatch(actions.showError('Invalid search query. Please try a different input.'));
  }

  next(action);
}
