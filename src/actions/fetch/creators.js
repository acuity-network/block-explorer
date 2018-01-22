import * as t from './types';

export function fetchAccount(address) {
  return {
    type: t.FETCH_ACCOUNT,
    payload: {
      address,
    },
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

export function fetchTransaction(hash) {
  return {
    type: t.FETCH_TRANSACTION,
    payload: {
      hash,
    },
  };
}
