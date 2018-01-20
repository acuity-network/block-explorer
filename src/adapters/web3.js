import Web3 from 'web3';

let web3;

export function initializeWeb3() {
  const currentProvider = window.web3.currentProvider;
  web3 = new Web3(currentProvider);
}

export function getWeb3() {
  return web3;
}
