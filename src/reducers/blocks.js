import * as t from '../actions/types';

const initialState = [];

export default (state = initialState, { type, payload = {} }) => {
  if (type === t.FETCH_BLOCKS) {
    const filteredBlocks = payload.blocks.filter(b => b !== null);
    return [
      ...state,
      ...filteredBlocks,
    ];
  }
  return state;
}

export function getBlocks(state) {
  return state.blocks || [];
}

export function getSingleBlock(state, blockNumber) {
  return state.blocks.find(block => block.number === blockNumber);
}
