import * as t from '../actions/types';

const initialState = {};

export default (state = initialState, { type, payload }) => {
  if (type === t.FETCH_TRANSACTION_SUCCESS) {
    const { hash } = payload;

    return {
      ...state,
      [hash]: payload,
    };
  }
  return state;
}

export function getTransaction(state, hash) {
  return state.transactions[hash] || null;
}
