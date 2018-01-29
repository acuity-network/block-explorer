import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getLatestBlocksForDisplay } from '@/reducers/selectors';

import BlockTable from './BlockTable';

const mapStateToProps = (state) => ({
  blocks: getLatestBlocksForDisplay(state),
});

const Blocks = ({ blocks = [] }) => (
  <div>
    <BlockTable blocks={blocks} title='Latest Blocks' />
  </div>
);

Blocks.propTypes = {
  blocks: PropTypes.array,
};

export default connect(mapStateToProps)(Blocks);
