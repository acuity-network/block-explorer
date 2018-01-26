import * as t from '@/actions/types';
import { fromWei } from '@/adapters/web3';
import { getLatestBlocks } from '@/reducers/selectors';

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

export function getStatisticsForDisplay(state, methods = { fromWei, getLatestBlocks }) {
  const { gasPrice, peerCount, latestBlockNumber } = state.statistics;
  const latestBlocks = methods.getLatestBlocks(state);
  const difficultyTotal = latestBlocks.reduce((acc, block) => acc + block.difficulty.toNumber(), 0);

  return {
    gasPriceInWei: gasPrice.toString(10),
    gasPriceInGwei: methods.fromWei(gasPrice, 'gwei'),
    latestBlockNumber: latestBlocks[0] ? latestBlocks[0].number : latestBlockNumber,
    averageDifficulty: difficultyTotal / latestBlocks.length || 0,
    peerCount,
  };
}
