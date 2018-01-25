import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getLatestBlocksForDisplay } from '@/reducers/selectors';

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

Start.propTypes = {
  blocks: PropTypes.array,
};

export default connect(mapStateToProps)(Start);
