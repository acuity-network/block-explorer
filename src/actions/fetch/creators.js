import * as t from './types';

export function fetchAccount(address) {
  return {
    type: t.FETCH_ACCOUNT,
    payload: {
      address,
    },
  };
}

export function fetchAccountSuccess(account) {
  return {
    type: t.FETCH_ACCOUNT_SUCCESS,
    payload: account,
  };
}

export function fetchBlocks(requestedBlockNumber, amountOfBlocks) {
  return {
    type: t.FETCH_BLOCKS,
    payload: {
      requestedBlockNumber,
      amountOfBlocks,
    },
  };
}

export function fetchBlocksSuccess(blockNumbers, blocks) {
  return {
    type: t.FETCH_BLOCKS_SUCCESS,
    payload: {
      blockNumbers,
      blocks,
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

export function fetchTransactionSuccess(transaction) {
  return {
    type: t.FETCH_TRANSACTION_SUCCESS,
    payload: transaction,
  };
}
