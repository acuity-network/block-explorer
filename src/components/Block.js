import React from 'react';
import { connect } from 'react-redux';

import { getSingleBlock } from '../reducers/selectors';

const mapStateToProps = (state) => ({
  block: getSingleBlock(state, state.location.payload.blockNumber),
});

const Block = ({ block = {} }) => (
  <div>
    <h2>Single Block!</h2>
    <ul>
      <li>Block #: {block.number}</li>
      <li>Received: {block.timestamp}</li>
    </ul>
  </div>
);

export default connect(mapStateToProps)(Block);
