import * as actions from '@/actions/creators';
import * as selectors from '@/reducers/selectors';

export function fetchTransactions(dispatch, getState) {
  const blockNumber = getState().location.payload.blockNumber;

  dispatch(actions.fetchTransactionsForBlock(blockNumber));
}
