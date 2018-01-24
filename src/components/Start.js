import React from 'react';
import { connect } from 'react-redux';

import { getLatestBlocksForDisplay } from '../reducers/selectors';

import BlockTable from './BlockTable';

const mapStateToProps = (state) => ({
  blocks: getLatestBlocksForDisplay(state),
});

const Start = ({ blocks = [] }) => (
  <div>
    <h2>Welcome!</h2>
    <BlockTable blocks={blocks} title='Latest Blocks' />
  </div>
);

export default connect(mapStateToProps)(Start);
