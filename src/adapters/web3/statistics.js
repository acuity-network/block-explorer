import { getWeb3Instance } from './init';

export function getPeerCount(getInstance = getWeb3Instance) {
  const eth = getInstance().eth;

  return new Promise((resolve, reject) => {
    eth.getPeerCount((err, peerCount) => {
      if (err) {
        reject(err);
      } else {
        resolve(peerCount);
      }
    });
  });
}

export function getGasPrice(getInstance = getWeb3Instance) {
  const eth = getInstance().eth;

  return new Promise((resolve, reject) => {
    eth.getGasPrice((err, gasPrice) => {
      if (err) {
        reject(err);
      } else {
        resolve(gasPrice);
      }
    });
  });
}
