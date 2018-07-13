import * as actions from '@/actions/creators';
import * as selectors from '@/reducers/selectors';

export function fetchAccount(dispatch, getState) {
  const address = getState().location.payload.address || '';
  dispatch(actions.fetchAccount(address));
}

export function fetchBlocks(dispatch) {
  dispatch(actions.fetchBlocks());
}

export function fetchSingleBlock(dispatch, getState) {
  const blockNumber = getState().location.payload.blockNumber;
  const blockInState = selectors.getBlockInState(getState(), blockNumber);

  if (!blockInState) {
    dispatch(actions.fetchBlocks(blockNumber, 1));
  }
}

export function fetchStatistics(dispatch) {
  dispatch(actions.fetchStatistics());
}

export function fetchTransactions(dispatch, getState) {
  const blockNumber = getState().location.payload.blockNumber;

  dispatch(actions.fetchTransactionsForBlock(blockNumber));
}

export function fetchSingleTransaction(dispatch, getState) {
  const hash = getState().location.payload.hash || '';
  const hashInState = selectors.getTransactionInState(getState(), hash);

  if (!hashInState) {
    dispatch(actions.fetchTransactions([hash]));
  }
}
