import * as actions from '@/actions/creators'
import * as t from '@/actions/types';
import * as web3 from '@/adapters/web3';

export default (store, adapter = web3) => next => async action => {
  if (action.type === t.FETCH_STATISTICS) {
    try {
      const latestBlockNumber = await adapter.getLatestBlockNumber();
      store.dispatch(actions.fetchBlocks(latestBlockNumber));

      const statistics = await Promise.all([
        adapter.getGasPrice(),
        adapter.getPeerCount(),
      ]);

      store.dispatch(actions.fetchStatisticsSuccess(
        latestBlockNumber,
        statistics[0],
        statistics[1],
      ));

    } catch(e) {
      store.dispatch(actions.showError(`Can't fetch statistics. Please try again.`));
    }

  } else {
    next(action);
  }
}
