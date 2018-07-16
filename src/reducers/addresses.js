import * as t from '@/actions/types';
import { fromWei } from '@/adapters/web3';

const initialState = {};

export default (state = initialState, { type, payload }) => {
  if (type === t.FETCH_ADDRESS_SUCCESS) {
    const { address } = payload;

    return {
      ...state,
      [address]: payload,
    };
  }
  return state;
}

export function getAddress(state, address) {
  return state.addresses[address] || {};
}

export function getAddressForDisplay(state, address, methods = { getAddress, fromWei }) {
  const addressData = methods.getAddress(state, address);
  let balanceInWei = 0;
  let balanceInEther = 0;
  if (addressData.balance) {
    balanceInWei = addressData.balance.toString(10);
    balanceInEther = parseFloat(methods.fromWei(balanceInWei, 'ether'), 10).toFixed(3);
  }

  return { ...addressData, balanceInWei, balanceInEther };
}
