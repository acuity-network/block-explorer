import Web3 from 'web3';

let web3;

export function getWeb3Instance() {
  return web3;
}

export function initializeWeb3() {
  const currentProvider = window.web3.currentProvider;
  web3 = new Web3(currentProvider);
}

export function getLatestBlockNumber() {
  return new Promise((resolve, reject) => {
    const eth = getWeb3Instance().eth;

    eth.getSyncing((err, result) => {
      if (err) {
        return reject(err);
      }

      if (!result) { // currently not syncing
        eth.getBlockNumber((err, blockNumber) => {
          if (err) {
            return reject(err);
          }
          resolve(blockNumber);
        });

      } else {
        resolve(result.highestBlock);
      }
    });
  });
}

export async function getBlocks(blockNumbers = []) {
  const eth = getWeb3Instance().eth;

  const blockRequests = blockNumbers.map(number => {
    return new Promise((resolve, reject) => {
      eth.getBlock(number, (err, block) => {
        if (err) {
          return reject(err);
        }
        resolve(block);
      });
    });
  });

  return await Promise.all(blockRequests);
}
