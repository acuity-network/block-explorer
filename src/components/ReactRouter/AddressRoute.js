import React from 'react';
import { connect } from 'react-redux';

import * as actions from '@/actions/creators';

import Address from '@/components/Address';

const mapDispatchToProps = (dispatch) => ({
  fetchAddress: (address) => dispatch(actions.fetchAddress(address))
});

class AddressRoute extends React.Component {
  componentDidMount() {
    const address = this.props.match.params.address;
    this.props.fetchAddress(address);
  }

  render() {
    const address = this.props.match.params.address;
    return <Address address={address} />;
  }
}

export default connect(null, mapDispatchToProps)(AddressRoute);
