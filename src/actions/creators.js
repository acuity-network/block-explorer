import * as t from './types';

export function fetchBlocks(endingBlockNumber, amountBlocks) {
  return {
    type: t.FETCH_BLOCKS,
    payload: {
      endingBlockNumber,
      amountBlocks,
    },
  };
}
