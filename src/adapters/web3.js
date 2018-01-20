import pkg from 'web3';

let web3;

export function getWeb3Instance() {
  return web3;
}

export function initializeWeb3(browser = window, Web3 = pkg) {
  if (!web3) {
    const currentProvider = browser.web3.currentProvider;
    web3 = new Web3(currentProvider);
  }
}

export function getLatestBlockNumber(getInstance = getWeb3Instance) {
  const eth = getInstance().eth;

  return new Promise((resolve, reject) => {
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

export async function getBlocks(blockNumbers = [], getInstance = getWeb3Instance) {
  const eth = getInstance().eth;

  const blockRequests = blockNumbers.map(number => {
    return new Promise(resolve => {
      eth.getBlock(number, (err, block) => {
        if (err) {
          resolve(null);
        } else {
          resolve(block);
        }
      });
    });
  });

  const blocks = await Promise.all(blockRequests);
  return blocks.filter(block => block !== null);
}
