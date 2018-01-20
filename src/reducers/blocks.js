import * as t from '../actions/types';

const initialState = {};

export default (state = initialState, { type, payload = {} }) => {
  if (type === t.FETCH_BLOCKS) {
    return {
      ...state,
      ...payload.blocks,
    };
  }
  return state;
}
