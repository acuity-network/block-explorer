import * as t from '../actions/types';

const initialState = {};

export default (state = initialState, { type, payload }) => {
  if (type === t.FETCH_ACCOUNT_SUCCESS) {
    const { address } = payload;

    return {
      ...state,
      [address]: payload,
    };
  }
  return state;
}

export function getAccount(state, address) {
  return state.accounts[address] || null;
}
