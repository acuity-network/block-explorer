import { getWeb3Instance } from './init';

export function getLatestBlockNumber(getInstance = getWeb3Instance) {
  return getInstance().eth.getBlockNumber();
}

export async function getBlocks(blockNumbers = [], getInstance = getWeb3Instance) {
  const eth = getInstance().eth;
  const blocks = blockNumbers.map(number => eth.getBlock(number));

  return blocks.filter(block => block !== null);
}
