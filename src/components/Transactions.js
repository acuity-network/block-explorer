import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as selectors from '../reducers/selectors';

import TransactionTable from './TransactionTable';

const mapStateToProps = (state) => {
  const blockNumber = state.location.payload.blockNumber;
  const transactionHashes = selectors.getTransactionHashesForBlock(state, blockNumber);
  return {
    transactions: selectors.getTransactionsForDisplay(state, transactionHashes),
  };
};

const Transactions = ({ transactions = [] }) => (
  <div>
    <TransactionTable transactions={transactions} />
  </div>
);

Transactions.propTypes = {
  transactions: PropTypes.array,
};

export default connect(mapStateToProps)(Transactions);
