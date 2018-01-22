import * as actions from '../actions/creators';
import * as selectors from '../reducers/selectors';

export function fetchAccount(dispatch, getState) {
  const addressLocation = getState().location.payload.address || '';
  // redux-first-router has issues with '0x' strings
  const address = addressLocation.replace('_', '');
  const addressInState = selectors.getAccount(getState(), address);

  if (!addressInState) {
    dispatch(actions.fetchAccount(address));
  }
}

export function fetchBlocks(dispatch) {
  dispatch(actions.fetchBlocks())
}

export function fetchSingleBlock(dispatch, getState) {
  const blockNumber = getState().location.payload.blockNumber;
  const blockInState = selectors.getSingleBlock(getState(), blockNumber);

  if (!blockInState.hasOwnProperty('number')) {
    dispatch(actions.fetchBlocks(blockNumber, 1));
  }
}

export function fetchTransaction(dispatch, getState) {
  const hashLocation = getState().location.payload.hash || '';
  // redux-first-router has issues with '0x' strings
  const hash = hashLocation.replace('_', '');
  const hashInState = selectors.getTransaction(getState(), hash);

  if (!hashInState) {
    dispatch(actions.fetchTransaction(hash));
  }
}
