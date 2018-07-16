import { getWeb3Instance } from './init';

export function getBalance(address, getInstance = getWeb3Instance) {
  return getInstance().eth.getBalance(address);
}

export function getTransactionCount(address, getInstance = getWeb3Instance) {
  return getInstance().eth.getTransactionCount(address);
}
