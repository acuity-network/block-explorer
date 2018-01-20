import * as actions from '../actions/creators';
import * as t from '../actions/types';
import * as web3 from '../adapters/web3';
import { maxBlocksPerPage } from '../constants';

export default ({ dispatch }) => next => async action => {
  if (action.type === t.INITIALIZE_APP) {
    if (!web3.getWeb3Instance()) {
      web3.initializeWeb3();
    }

    const latestBlockNumber = await web3.getLatestBlockNumber();
    dispatch(actions.fetchBlocks(latestBlockNumber, maxBlocksPerPage));
  }

  next(action);
}
