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
    eth.getBlockNumber((err, number) => {
      if (err) {
        reject(err);
      } else {
        resolve(number);
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

export function isAddress(hex, getInstance = getWeb3Instance) {
  const instance = getInstance();
  return instance.isAddress(hex);
}
