import React from 'react';
import { connect } from 'react-redux';

import * as actions from '@/actions/creators';

import Transaction from '@/components/Transaction';

const mapDispatchToProps = (dispatch) => ({
  // template
});

class TransactionRoute extends React.Component {
  componentDidMount() {
    // template
  }

  render() {
    return (<Transaction />);
  }
}

export default connect(null, mapDispatchToProps)(TransactionRoute);
