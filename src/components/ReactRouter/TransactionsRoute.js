import React from 'react';
import { connect } from 'react-redux';

import * as actions from '@/actions/creators'

import Transactions from '@/components/Transactions';

const mapDispatchToProps = (dispatch) => ({
  // template
});

class TransactionsRoute extends React.Component {
  componentDidMount() {
    // template
  }

  render() {
    return (<Transactions />);
  }
}

export default connect(null, mapDispatchToProps)(TransactionsRoute);
