import React from 'react';
import { connect } from 'react-redux';

import * as actions from '@/actions/creators';

import Transactions from '@/components/Transactions';

const mapDispatchToProps = (dispatch) => ({
  fetchTransactions: (blockNumber) => dispatch(actions.fetchTransactionsForBlock(blockNumber)),
});

class TransactionsRoute extends React.Component {
  componentDidMount() {
    const blockNumber = this.props.match.params.blockNumber;
    this.props.fetchTransactions(blockNumber);
  }

  render() {
    const blockNumber = this.props.match.params.blockNumber;
    return <Transactions blockNumber={blockNumber} />;
  }
}

export default connect(null, mapDispatchToProps)(TransactionsRoute);
