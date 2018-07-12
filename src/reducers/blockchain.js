import * as t from '@/actions/types';

const initialState = {
  currency: 'MIX',
};

export default (state = initialState, { type, payload }) => {
  if (type === t.SET_CURRENCY) {
    return {
      ...state,
      currency: payload.currency,
    };
  }
  return state;
}

export function getCurrency(state) {
  return state.blockchain.currency;
}
