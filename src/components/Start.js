import React from 'react';
import { connect } from 'react-redux';

import { getBlocks } from '../reducers/selectors';

const mapStateToProps = (state) => ({
  blocks: getBlocks(state),
});

const Start = ({ blocks = [] }) => (
  <div>
    <h2>Welcome!</h2>
    <ul>
      {blocks.map(block => {
        return block && (
          <li>
            Block #: {block.number}<br />
            Tx #: {block.transactions.length}<br />
            Size: {block.size}<br />
            Timestamp: {block.timestamp}<br />
          </li>
        )
      })}
    </ul>
  </div>
);

export default connect(mapStateToProps)(Start);
