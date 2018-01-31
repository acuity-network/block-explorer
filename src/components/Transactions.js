import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Link from 'redux-first-router-link';

import * as selectors from '@/reducers/selectors';
import { BLOCK_DETAIL } from '@/router';

import TransactionTable from './TransactionTable';

const mapStateToProps = (state) => {
  const blockNumber = state.location.payload.blockNumber;
  const transactionHashes = selectors.getTransactionHashesForBlock(state, blockNumber);
  const blockLink = (<Link to={{ type: BLOCK_DETAIL, payload: { blockNumber }}}>{blockNumber}</Link>);
  return {
    transactions: selectors.getTransactionsForDisplay(state, transactionHashes),
    title: <span>Transactions for Block # {blockLink}</span>,
  };
};

const Transactions = ({ transactions = [], title = '' }) => (
  <div>
    <TransactionTable transactions={transactions} title={title} />
  </div>
);

Transactions.propTypes = {
  transactions: PropTypes.array,
  title: PropTypes.element,
};

export default connect(mapStateToProps)(Transactions);
