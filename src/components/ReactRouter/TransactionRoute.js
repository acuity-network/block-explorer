import React from 'react';
import { connect } from 'react-redux';

import * as actions from '@/actions/creators';
import * as selectors from '@/reducers/selectors';

import Transaction from '@/components/Transaction';

const mapStateToProps = (state, ownProps) => ({
  transactionInState: selectors.getTransactionInState(state, ownProps.match.params.hash),
});

const mapDispatchToProps = (dispatch) => ({
  fetchSingleTransaction: (hash) => dispatch(actions.fetchTransactions([hash])),
});

class TransactionRoute extends React.Component {
  componentDidMount() {
    if (!this.props.transactionInState) {
      const hash = this.props.match.params.hash;
      this.props.fetchSingleTransaction(hash);
    }
  }

  render() {
    return (<Transaction />);
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TransactionRoute);
