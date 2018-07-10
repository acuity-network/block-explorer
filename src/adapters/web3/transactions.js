import { getWeb3Instance } from './init';

export async function getTransactions(transactionNumbers = [], getInstance = getWeb3Instance) {
  const eth = getInstance().eth;
  const transactions = transactionNumbers.map(number => eth.getTransaction(number));

  return transactions.filter(transaction => transaction !== null);
}
