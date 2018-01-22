import React from 'react';
import { connect } from 'react-redux';

import * as selectors from '../reducers/selectors';

const mapStateToProps = (state) => {
  // redux-first-router has issues with '0x' strings
  const locationHash = state.location.payload.hash || '';
  const hash = locationHash.replace('_', '');
  return {
    ...selectors.getTransaction(state, hash),
  };
};

const Transaction = () => (
  <div>
    <h2>Single Transaction!</h2>
  </div>
);

export default connect(mapStateToProps)(Transaction);
