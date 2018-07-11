import React from 'react';
import { connect } from 'react-redux';

import * as actions from '@/actions/creators'

import Account from '@/components/Account';

const mapDispatchToProps = (dispatch) => ({
  // template
});

class AccountRoute extends React.Component {
  componentDidMount() {
    // template
  }

  render() {
    return (<Account />);
  }
}

export default connect(null, mapDispatchToProps)(AccountRoute);
