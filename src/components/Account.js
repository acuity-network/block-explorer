import React from 'react';
import { connect } from 'react-redux';

import * as selectors from '../reducers/selectors';

const mapStateToProps = (state) => {
  return selectors.getCurrentAccountForDisplay(state);
};

const Account = ({ address = '', balanceInEther = '', balanceInWei = '', transactionCount = 0 }) => (
  <div>
    <h2>Single Account!</h2>
    <ul>
      <li>Address: {address}</li>
      <li>Balance in Wei: {balanceInWei} Wei</li>
      <li>Balance in Ether: {balanceInEther} Ether</li>
      <li>Transaction count: {transactionCount}</li>
    </ul>
  </div>
);

export default connect(mapStateToProps)(Account);
