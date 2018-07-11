import * as actions from '@/actions/creators';
import * as selectors from '@/reducers/selectors';

export function fetchTransactions(dispatch, getState) {
  const blockNumber = getState().location.payload.blockNumber;

  dispatch(actions.fetchTransactionsForBlock(blockNumber));
}

export function fetchSingleTransaction(dispatch, getState) {
  const hashLocation = getState().location.payload.hash || '';
  // redux-first-router has issues with '0x' strings
  const hash = hashLocation.replace('_', '');
  const hashInState = selectors.getTransactionInState(getState(), hash);

  if (!hashInState) {
    dispatch(actions.fetchTransactions([hash]));
  }
}
