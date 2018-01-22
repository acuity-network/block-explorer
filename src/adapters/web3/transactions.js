import { getWeb3Instance } from './init';

export function getTransaction(hash, getInstance = getWeb3Instance) {
  const eth = getInstance().eth;

  return new Promise((resolve, reject) => {
    eth.getTransaction(hash, (err, transaction) => {
      if (err) {
        reject(err);
      } else {
        resolve(transaction);
      }
    });
  });
}
