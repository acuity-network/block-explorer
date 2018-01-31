import React from 'react';
import { connect } from 'react-redux';

import { getBlockForDisplay } from '@/reducers/selectors';

const mapStateToProps = (state) => ({
  block: getBlockForDisplay(state, state.location.payload.blockNumber),
});

const Block = ({ block = {} }) => (
  <div>
    <h2>Single Block!</h2>
    <ul>
      <li>Block #: {block.number.value}</li>
      <li>Received: {block.time.value}</li>
    </ul>
  </div>
);

export default connect(mapStateToProps)(Block);
