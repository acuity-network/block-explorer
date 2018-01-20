import * as actions from '../actions/creators';
import * as selectors from '../reducers/selectors';

export function fetchBlock(dispatch, getState) {
  const blockNumber = getState().location.payload.blockNumber;
  const blockInState = selectors.getSingleBlock(getState(), blockNumber);

  if (!blockInState) {
    dispatch(actions.fetchBlocks(blockNumber, 1));
  }
}
