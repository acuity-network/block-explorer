import * as t from '../actions/types';
import { fromWei } from '../adapters/web3';

const initialState = {};

export default (state = initialState, { type, payload }) => {
  if (type === t.FETCH_TRANSACTIONS_SUCCESS) {

    return {
      ...state,
      ...payload,
    };
  }
  return state;
}

export function getSingleTransaction(state, hash) {
  return state.transactions[hash] || {};
}

export function getCurrentTransactionForDisplay(state, methods = { getSingleTransaction, fromWei }) {
  // redux-first-router has issues with '0x' strings
  const locationHash = state.location.payload.hash || '';
  const hash = locationHash.replace('_', '');
  const transactionData = methods.getSingleTransaction(state, hash);
  let valueInWei = '';
  let valueInEther = '';
  if (transactionData.value) {
    valueInWei = transactionData.value.toString(10);
    valueInEther = methods.fromWei(transactionData.value, 'ether');
  }

  return { ...transactionData, valueInWei, valueInEther };
}

export function getTransactionInState(state, hash, methods = { getSingleTransaction }) {
  return Object.keys(methods.getSingleTransaction(state, hash)).length > 0;
}
