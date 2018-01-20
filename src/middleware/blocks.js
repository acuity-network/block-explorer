import * as t from '../actions/types';
import { getBlockNumber } from '../adapters/web3';

export default ({ dispatch, getState }) => next => async action => {
  if (action.type === t.FETCH_BLOCKS) {
    action.payload.blockNumber = await getBlockNumber();
  }
  next(action);
}
