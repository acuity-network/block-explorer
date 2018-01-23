import React from 'react';
import { connect } from 'react-redux';

import * as selectors from '../reducers/selectors';

const mapStateToProps = (state) => {
  return selectors.getCurrentTransactionForDisplay(state);
};

const Transaction = ({ from = '', to = '', valueInEther = '' }) => (
  <div>
    <h2>Single Transaction!</h2>
    <ul>
      <li>From: {from}</li>
      <li>To: {to}</li>
      <li>Value: {valueInEther} Ether</li>
    </ul>
  </div>
);

export default connect(mapStateToProps)(Transaction);
