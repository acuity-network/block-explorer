import React from 'react';
import { connect } from 'react-redux';
import Link from 'redux-first-router-link';

import { getBlocks } from '../reducers/selectors';
import { BLOCK_DETAIL } from '../router';

const mapStateToProps = (state) => ({
  blocks: getBlocks(state),
});

const Start = ({ blocks = [] }) => (
  <div>
    <h2>Welcome!</h2>
    <ul>
      {blocks.map(block => block && (
        <li key={block.number}>
          <Link to={{ type: BLOCK_DETAIL, payload: { blockNumber: block.number}}}>
            Block #: {block.number}<br />
            Tx #: {block.transactions.length}<br />
            Size: {block.size}<br />
            Timestamp: {block.timestamp}<br />
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default connect(mapStateToProps)(Start);
