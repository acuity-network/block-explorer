import * as t from '../actions/types';
import * as web3 from '../adapters/web3';
import { maxBlocksPerPage } from '../constants';

export default ({ dispatch, getState }) => next => async action => {
  if (action.type === t.FETCH_BLOCKS) {
    const {
      endingBlockNumber = -1,
      amountBlocks = maxBlocksPerPage,
    } = action.payload;
    const blockNumbers = [];
    let previousBlock = endingBlockNumber;

    if (endingBlockNumber < 0) {
      previousBlock = await web3.getLatestBlockNumber();
    }

    while (blockNumbers.length < amountBlocks) {
      blockNumbers.push(previousBlock);
      previousBlock -= 1;

      if (previousBlock < 0) break;
    }

    action.payload.blocks = await web3.getBlocks(blockNumbers);
  }

  next(action);
}
