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
