import * as t from '../actions/types';
import { maxBlocksPerPage } from '../constants';

const initialState = {
  blockNumbers: [],
  blocks: {},
};

export default (state = initialState, { type, payload = {} }) => {
  if (type === t.FETCH_BLOCKS_SUCCESS) {
    return {
      blockNumbers: [
        ...state.blockNumbers,
        ...payload.blockNumbers
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

export function getSingleBlock(state, blockNumber) {
  return state.blocks.blocks[blockNumber] || {};
}

export function getBlockNumbers(state) {
  return state.blocks.blockNumbers || [];
}

export function getBlockInState(state, blockNumber, methods = { getSingleBlock }) {
  return Object.keys(methods.getSingleBlock(state, blockNumber)).length > 0;
}
