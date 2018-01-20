import * as t from '../actions/types';
import { initializeWeb3, getWeb3 } from '../adapters/web3';

export default ({ dispatch, getState }) => next => action => {
  if (action.type === t.INITIALIZE_APP) {
    initializeWeb3();
    const eth = getWeb3().eth;

    eth.getSyncing((err, isSyncing) => {
      if (err) return console.error(err);

      if (!isSyncing) {
        eth.getBlockNumber((err, blockNumber) => {
          console.log(blockNumber);
        });
      }
    });
  }
  next(action);
}
