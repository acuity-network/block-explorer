import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  getStatisticsForDisplay,
  getLatestBlocksForDisplay,
} from '@/reducers/selectors';

import BlockTable from './BlockTable';
import Statistics from './Statistics';

const mapStateToProps = (state) => ({
  statistics: getStatisticsForDisplay(state),
  blocks: getLatestBlocksForDisplay(state),
});

const Start = ({ blocks = [], statistics = {} }) => (
  <div className="dashboard">
    <Statistics statistics={statistics} />
    <BlockTable blocks={blocks} title='Latest Blocks' />
  </div>
);

Start.propTypes = {
  blocks: PropTypes.array,
};

export default connect(mapStateToProps)(Start);
