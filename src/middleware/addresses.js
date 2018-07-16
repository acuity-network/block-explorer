import * as actions from '@/actions/creators'
import * as t from '@/actions/types';
import * as web3 from '@/adapters/web3';

export default (store, adapter = web3) => next => async action => {
  if (action.type === t.FETCH_ADDRESS) {
    const { address } = action.payload;

    try {
      const addressData = await Promise.all([
        adapter.getBalance(address),
        adapter.getTransactionCount(address),
      ]);

      store.dispatch(actions.fetchAddressSuccess({
        address,
        balance: addressData[0],
        transactionCount: addressData[1],
      }));
    } catch(e) {
      store.dispatch(actions.showError(`Can't fetch address. Please try again.`));
    }

  } else {
    next(action);
  }
}
