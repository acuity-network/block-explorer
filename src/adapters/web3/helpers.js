import { getWeb3Instance } from './init';

export function fromWei(number, unit, getInstance = getWeb3Instance) {
  return getInstance().utils.fromWei(number.toString(10), unit);
}

export function isAddress(hex, getInstance = getWeb3Instance) {
  return getInstance().utils.isAddress(hex);
}
