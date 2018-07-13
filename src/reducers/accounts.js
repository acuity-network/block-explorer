import * as t from '@/actions/types';
import { fromWei } from '@/adapters/web3';

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
  return state.accounts[address] || {};
}

export function getCurrentAccountForDisplay(state, methods = { getAccount, fromWei }) {
  const address = state.location.payload.address || '';
  const accountData = methods.getAccount(state, address);
  let balanceInWei = 0;
  let balanceInEther = 0;
  if (accountData.balance) {
    balanceInWei = accountData.balance.toString(10);
    balanceInEther = parseFloat(methods.fromWei(balanceInWei, 'ether'), 10).toFixed(3);
  }

  return { ...accountData, balanceInWei, balanceInEther };
}
