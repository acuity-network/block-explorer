import * as t from '../actions/types';

const initialState = 'null';

export default (state = initialState, { type, payload = {} }) => {
  if (type === t.FETCH_BLOCKS) {
    return payload.blockNumber || null;
  }
  return state;
}
