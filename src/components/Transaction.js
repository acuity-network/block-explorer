import React from 'react';
import { connect } from 'react-redux';

import { fromWei } from '../adapters/web3/helpers';
import * as selectors from '../reducers/selectors';

const mapStateToProps = (state) => {
  // redux-first-router has issues with '0x' strings
  const locationHash = state.location.payload.hash || '';
  const hash = locationHash.replace('_', '');
  return {
    ...selectors.getTransaction(state, hash),
  };
};

const Transaction = ({ from, to, value }) => (
  <div>
    <h2>Single Transaction!</h2>
    <ul>
      <li>From: {from}</li>
      <li>To: {to}</li>
      <li>Value: {fromWei(value, 'ether')} Ether</li>
    </ul>
  </div>
);

export default connect(mapStateToProps)(Transaction);
