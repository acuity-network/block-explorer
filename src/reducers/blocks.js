import * as t from '@/actions/types';
import { maxBlocksPerPage } from '@/constants';
import { timestampDistance } from '@/helpers/dates';

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

export function getLatestBlocksForDisplay(state, amountOfBlocks, methods = { getLatestBlocks, timestampDistance }) {
  const latestBlocks = methods.getLatestBlocks(state, amountOfBlocks);
  const blocksForDisplay = [];

  latestBlocks.forEach(block => {
    const displayBlock = {
      key: {
        value: block.number,
      },
      number: {
        value: block.number,
        linkReactRouter: `/block/${block.number}`,
      },
      time: {
        value: methods.timestampDistance(block.timestamp),
      },
      transactions: {
        value: block.transactions.length,
      },
      miner: {
        value: block.miner,
        linkReactRouter: `/address/${block.miner}`,
      },
    };
    blocksForDisplay.push(displayBlock);
  });

  return blocksForDisplay;
}

export function getSingleBlock(state, blockNumber) {
  return state.blocks.blocks[blockNumber] || {};
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

export function getBlockNumberFromHash(state, blockHash) {
  const blockArray = Object.values(state.blocks.blocks);
  const block = blockArray.find(b => b.hash === blockHash) || {};
  return block.number;
}
