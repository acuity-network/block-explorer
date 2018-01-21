import React from 'react';
import { connect } from 'react-redux';

import { fromWei } from '../adapters/web3/helpers';
import * as selectors from '../reducers/selectors';

const mapStateToProps = (state) => {
  // redux-first-router has issues with '0x' strings
  const address = state.location.payload.address.replace('_', '');
  return {
    ...selectors.getAccount(state, address),
  };
};

const Account = ({ address = '', balance = '', transactionCount = 0 }) => (
  <div>
    <h2>Single Account!</h2>
    <ul>
      <li>Address: {address}</li>
      <li>Balance: {fromWei(balance, 'ether')} Ether</li>
      <li>Transaction count: {transactionCount}</li>
    </ul>
  </div>
);

export default connect(mapStateToProps)(Account);
