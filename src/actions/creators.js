import * as t from './types';

export function initializeApp() {
  return {
    type: t.INITIALIZE_APP,
  };
}

export function fetchBlocks(endingBlockNumber, amountBlocks) {
  return {
    type: t.FETCH_BLOCKS,
    payload: {
      endingBlockNumber,
      amountBlocks,
    },
  };
}
