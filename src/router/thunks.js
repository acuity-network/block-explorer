import * as actions from '../actions/creators';
import * as selectors from '../reducers/selectors';

export function fetchAccount(dispatch, getState) {
  const address = getState().location.payload.address;
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
