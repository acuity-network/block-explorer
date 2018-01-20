import * as t from '../actions/types';
import * as web3 from '../adapters/web3';

export default ({ dispatch, getState }) => next => async action => {
  if (action.type === t.FETCH_BLOCKS) {
    const { endingBlockNumber, amountBlocks } = action.payload;
    const blockNumbers = [endingBlockNumber];
    let previousBlock = endingBlockNumber;

    while (blockNumbers.length < amountBlocks) {
      previousBlock -= 1;
      if (previousBlock < 0) break;
      blockNumbers.push(previousBlock);
    }

    action.payload.blocks = await web3.getBlocks(blockNumbers);
  }

  next(action);
}
