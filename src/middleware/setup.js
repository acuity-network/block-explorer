import * as actions from '../actions/creators';
import * as t from '../actions/types';
import { initializeWeb3, getWeb3Instance } from '../adapters/web3';

export default ({ dispatch }) => next => action => {
  if (action.type === t.INITIALIZE_APP) {
    if (!getWeb3Instance()) {
      initializeWeb3();
    }

    dispatch(actions.fetchBlocks());
  }
  next(action);
}
