import * as t from '@/actions/types';

const initialState = {
  latestBlockNumber: 0,
  gasPrice: 0,
  peerCount: 0,
};

export default (state = initialState, { type, payload }) => {
  if (type === t.FETCH_STATISTICS_SUCCESS) {
    return {
      ...state,
      ...payload,
    };
  }
  return state;
}
