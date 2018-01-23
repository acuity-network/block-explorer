import * as t from '../actions/types';
import { fromWei } from '../adapters/web3';

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
  return state.transactions[hash] || {};
}

export function getCurrentTransactionForDisplay(state, methods = { getTransaction, fromWei }) {
  // redux-first-router has issues with '0x' strings
  const locationHash = state.location.payload.hash || '';
  const hash = locationHash.replace('_', '');
  const transactionData = methods.getTransaction(state, hash);
  let valueInWei = '';
  let valueInEther = '';
  if (transactionData.value) {
    valueInWei = transactionData.value.toString(10);
    valueInEther = methods.fromWei(transactionData.value, 'ether');
  }

  return { ...transactionData, valueInWei, valueInEther };
}

export function getTransactionInState(state, hash, methods = { getTransaction }) {
  return Object.keys(methods.getTransaction(state, hash)).length > 0;
}
