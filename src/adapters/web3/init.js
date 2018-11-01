import pkg from 'web3';
import { fallbackUrl } from '@/constants';

let web3;
let isUsingFallback = false;

export function getWeb3Instance() {
  return web3;
}

export function initializeWeb3(browser = window, Web3 = pkg) {
  if (!web3) {
    let provider;
    if (browser.web3 && browser.web3.currentProvider) {
      provider = browser.web3.currentProvider;
    } else {
      isUsingFallback = true;
    }
    web3 = new Web3(provider || fallbackUrl);
    web3.eth.defaultBlock = 'pending';
  }
}

export function resetWeb3Instance() {
  isUsingFallback = false;
  web3 = undefined;
}

export function getIsUsingFallback() {
  return isUsingFallback;
}

export function getCurrency() {
  return isUsingFallback ? 'MIX' : 'ETH';
}
