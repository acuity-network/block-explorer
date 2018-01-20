import * as t from '../actions/types';
import { maxBlocksPerPage } from '../constants';

const initialState = {
  blocksLoaded: [],
  byNumber: {},
};

export default (state = initialState, { type, payload = {} }) => {
  if (type === t.FETCH_BLOCKS) {
    const newBlocks = payload.blocksLoaded.filter(n => !state.blocksLoaded.includes(n))
    return {
      blocksLoaded: [...state.blocksLoaded, ...newBlocks].sort((a, b) => b - a),
      byNumber: {
        ...state.byNumber,
        ...payload.byNumber,
      },
    };
  }
  return state;
}

export function getLatestBlocks(state, maxBlocks = maxBlocksPerPage) {
  const blocksLoaded = state.blocks.blocksLoaded;
  const amountBlocks = blocksLoaded.length;
  const byNumber = state.blocks.byNumber;
  const latestBlocks = [];

  for (let i = 0; i < amountBlocks; i++) {
    const blockNumber = blocksLoaded[i];
    latestBlocks.push(byNumber[blockNumber]);

    if (i === maxBlocks) break;
  }

  return latestBlocks;
}

export function getSingleBlock(state, blockNumber) {
  return state.blocks.byNumber[blockNumber] || {};
}
