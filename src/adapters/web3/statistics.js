import { getWeb3Instance } from './init';

export function getGasPrice(getInstance = getWeb3Instance) {
  return getInstance().eth.getGasPrice();
}

export function getPeerCount(getInstance = getWeb3Instance) {
  return getInstance().eth.net.getPeerCount();
}
