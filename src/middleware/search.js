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
      return history.push(`/accounts/${query}`);
    }

    const blockArray = await adapter.getBlocks([query]);
    if (blockArray.length === 1) {
      const block = blockArray[0];
      store.dispatch(actions.fetchBlocksSuccess([block.number.toString()], { [block.number]: block }));
      return history.push(`/blocks/${block.number}`);
    }

    if (query.substring(0, 2) === '0x' && query.length === 66) {
      const transactionArray = await adapter.getTransactions([query]);
      if (transactionArray.length === 1) {
        const transaction = transactionArray[0];
        store.dispatch(actions.fetchTransactionsSuccess({ [transaction.hash]: transaction }));
        return history.push(`/transactions/${transaction.hash}`);
      }
    }

    console.log('Invalid search query.'); // TODO: error handling

  }

  next(action);
}
