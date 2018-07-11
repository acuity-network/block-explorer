import { getWeb3Instance } from './init';

export async function getTransactions(transactionNumbers = [], getInstance = getWeb3Instance) {
  const eth = getInstance().eth;
  const transactionRequests = transactionNumbers.map(number => eth.getTransaction(number));
  const transactions = await Promise.all(transactionRequests);

  return transactions.filter(transaction => transaction !== null);
}
