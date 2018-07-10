import { getWeb3Instance } from './init';

export function fromWei(number, unit, getInstance = getWeb3Instance) {
  const instance = getInstance().utils;

  return instance.fromWei(number.toString(10), unit);
}

export function isAddress(hex, getInstance = getWeb3Instance) {
  const instance = getInstance().utils;
  return instance.isAddress(hex);
}
