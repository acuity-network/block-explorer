import { getWeb3Instance } from './init';

export function isAddress(hex, getInstance = getWeb3Instance) {
  const instance = getInstance();
  return instance.isAddress(hex);
}

export function getBalance(address, getInstance = getWeb3Instance) {
  const eth = getInstance().eth;

  return new Promise((resolve, reject) => {
    eth.getBalance(address, (err, balance) => {
      if (err) {
        reject(err);
      } else {
        resolve(balance);
      }
    });
  });
}
