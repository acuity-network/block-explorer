import * as actions from '../actions/creators';
import * as selectors from '../reducers/selectors';

export function fetchSingleBlock(dispatch, getState) {
  const blockNumber = getState().location.payload.blockNumber;
  const blockInState = selectors.getSingleBlock(getState(), blockNumber);

  if (!blockInState.hasOwnProperty('number')) {
    dispatch(actions.fetchBlocks(blockNumber, 1));
  }
}

export function fetchBlocks(dispatch) {
  dispatch(actions.fetchBlocks())
}
