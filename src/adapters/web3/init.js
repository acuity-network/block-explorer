import pkg from 'web3';
import { fallbackUrl } from '@/constants';

let web3;

export function getWeb3Instance() {
  return web3;
}

export function initializeWeb3(browser = window, Web3 = pkg) {
  if (!web3) {
    let provider;
    if (browser.web3) {
      provider = browser.web3.currentProvider;
    } else {
      provider = new Web3.providers.HttpProvider(fallbackUrl)
    }
    web3 = new Web3(provider);
  }
}
