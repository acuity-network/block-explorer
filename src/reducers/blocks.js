import * as t from '@/actions/types';
import * as routes from '@/router';
import { maxBlocksPerPage } from '@/constants';

const initialState = {
  blockNumbers: [],
  blocks: {},
};

export default (state = initialState, { type, payload = {} }) => {
  if (type === t.FETCH_BLOCKS_SUCCESS) {
    const newBlockNumbers = payload.blockNumbers.filter(b => !state.blockNumbers.includes(b));
    return {
      blockNumbers: [
        ...state.blockNumbers,
        ...newBlockNumbers,
      ].sort((a, b) => b - a),
      blocks: {
        ...state.blocks,
        ...payload.blocks,
      },
    };
  }
  return state;
}

export function getLatestBlocks(state, amountOfBlocks = maxBlocksPerPage) {
  const blockNumbers = state.blocks.blockNumbers;
  const maxBlocks = Math.min(amountOfBlocks, blockNumbers.length);
  const blocks = state.blocks.blocks;
  const latestBlocks = [];

  for (let i = 0; i < maxBlocks; i++) {
    const blockNumber = blockNumbers[i];
    latestBlocks.push(blocks[blockNumber]);
  }

  return latestBlocks;
}

export function getLatestBlocksForDisplay(state, amountOfBlocks, methods = { getLatestBlocks }) {
  const latestBlocks = methods.getLatestBlocks(state, amountOfBlocks);
  const blocksForDisplay = [];

  latestBlocks.forEach(block => {
    const displayBlock = {
      key: {
        value: block.number,
      },
      number: {
        value: block.number,
        linkType: routes.BLOCK_DETAIL,
        linkPayload: { blockNumber: block.number },
      },
      time: {
        value: block.timestamp,
      },
      transactions: {
        value: block.transactions.length,
        linkType: block.transactions.length ? routes.TRANSACTIONS : undefined,
        linkPayload: { blockNumber: block.number },
      },
      miner: {
        value: block.miner,
        linkType: routes.ACCOUNT_DETAIL,
        // redux-first-router has issues with '0x' strings
        linkPayload: { address: `_${block.miner}` },
      },
    };
    blocksForDisplay.push(displayBlock);
  });

  return blocksForDisplay;
}

export function getSingleBlock(state, blockNumber) {
  return state.blocks.blocks[blockNumber] || {};
}

export function getBlockForDisplay(state, blockNumber, methods = { getSingleBlock }) {
  const block = methods.getSingleBlock(state, blockNumber);

  return {
    number: {
      value: block.number,
    },
    time: {
      value: block.timestamp,
    },
    difficulty: {
      value: block.difficulty,
    },
    nonce: {
      value: block.nonce,
    },
    size: {
      value: block.size,
    },
    miner: {
      value: block.miner,
      linkType: routes.ACCOUNT_DETAIL,
      // redux-first-router has issues with '0x' strings
      linkPayload: { address: `_${block.miner}` },
    },
    gasLimit: {
      value: block.gasLimit,
    },
    gasUsed: {
      value: block.gasUsed,
    },
    data: {
      value: block.data,
    },
    transactions: {
      value: block.transactions ? block.transactions.length : 0,
      linkType: block.transactions && block.transactions.length ? routes.TRANSACTIONS : undefined,
      linkPayload: { blockNumber: block.number },
    },
    uncles: {
      value: block.uncles ? block.uncles.length : 0,
    },
  }
}

export function getBlockNumbers(state) {
  return state.blocks.blockNumbers || [];
}

export function getBlockInState(state, blockNumber, methods = { getSingleBlock }) {
  return Object.keys(methods.getSingleBlock(state, blockNumber)).length > 0;
}

export function getTransactionHashesForBlock(state, blockNumber, methods = { getSingleBlock }) {
  return methods.getSingleBlock(state, blockNumber).transactions || [];
}
