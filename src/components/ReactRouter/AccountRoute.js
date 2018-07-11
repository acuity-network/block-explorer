import React from 'react';
import { connect } from 'react-redux';

import * as actions from '@/actions/creators'

import Account from '@/components/Account';

const mapDispatchToProps = (dispatch) => ({
  fetchAccount: (address) => dispatch(actions.fetchAccount(address))
});

class AccountRoute extends React.Component {
  componentDidMount() {
    const address = this.props.match.params.address;
    this.props.fetchAccount(address);
  }

  render() {
    const address = this.props.match.params.address;
    return (<Account address={address} />);
  }
}

export default connect(null, mapDispatchToProps)(AccountRoute);
