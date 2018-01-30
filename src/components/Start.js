import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getIsUsingFallback } from '@/adapters/web3/init';
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
  <div>
    Connected to {getIsUsingFallback()
      ? 'MIX (rpc.mix-blockchain.org)'
      : 'your Web3 browser extension (e.g. Metamask)'
    }
    <div className="dashboard">
      <Statistics statistics={statistics} />
      <BlockTable blocks={blocks} title='Latest Blocks' />
    </div>
  </div>
);

Start.propTypes = {
  blocks: PropTypes.array,
};

export default connect(mapStateToProps)(Start);
