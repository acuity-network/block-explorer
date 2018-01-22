import * as actions from '../actions/creators';
import * as t from '../actions/types';
import * as web3 from '../adapters/web3';
import { maxBlocksPerPage } from '../constants';

export default (store, adapter = web3) => next => async action => {
  if (action.type === t.FETCH_BLOCKS) {
    const {
      endingBlockNumber = -1,
      amountBlocks = maxBlocksPerPage,
    } = action.payload;
    const blockNumbers = [];
    let previousBlock = endingBlockNumber;

    if (endingBlockNumber < 0) {
      previousBlock = await adapter.getLatestBlockNumber();
    }

    while (blockNumbers.length < amountBlocks) {
      blockNumbers.push(previousBlock);
      previousBlock -= 1;

      if (previousBlock < 0) break;
    }

    const fetchedBlocks = await adapter.getBlocks(blockNumbers);
    const blocks = {};

    fetchedBlocks.forEach(block => {
      if (block) {
        blocks[block.number] = block;
      }
    });

    store.dispatch(actions.fetchBlocksSuccess(Object.keys(blocks), blocks));

  } else {
    next(action);
  }
}
