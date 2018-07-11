import { getWeb3Instance } from './init';

export function fromWei(numberAsString, unit, getInstance = getWeb3Instance) {
  return getInstance().utils.fromWei(numberAsString, unit);
}

export function isAddress(hex, getInstance = getWeb3Instance) {
  return getInstance().utils.isAddress(hex);
}
