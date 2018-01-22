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

export function fetchBlocks(endingBlockNumber, amountBlocks) {
  return {
    type: t.FETCH_BLOCKS,
    payload: {
      endingBlockNumber,
      amountBlocks,
    },
  };
}

export function fetchBlocksSuccess(blocksLoaded, byNumber) {
  return {
    type: t.FETCH_BLOCKS_SUCCESS,
    payload: {
      blocksLoaded,
      byNumber,
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
