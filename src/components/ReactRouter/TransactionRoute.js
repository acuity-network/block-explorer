import React from 'react';
import { connect } from 'react-redux';

import * as actions from '@/actions/creators';
import * as selectors from '@/reducers/selectors';

import Transaction from '@/components/Transaction';

const mapStateToProps = (state, { match }) => ({
  transactionInState: selectors.getTransactionInState(state, match.params.hash),
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
    const hash = this.props.match.params.hash;
    return <Transaction hash={hash} />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TransactionRoute);
