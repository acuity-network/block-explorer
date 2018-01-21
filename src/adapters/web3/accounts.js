import { getWeb3Instance } from './init';

export function isAddress(hex, getInstance = getWeb3Instance) {
  const instance = getInstance();
  return instance.isAddress(hex);
}
