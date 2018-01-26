import React from 'react';
import PropTypes from 'prop-types';

import BarChart from './BarChart';

const Statistics = ({ statistics = {} }) => (
  <div>
    Peer count: {statistics.peerCount}<br />
    Gas price: {statistics.gasPriceInGwei} Gwei<br />
    Latest block number: {statistics.latestBlockNumber}<br />
    Considered blocks: {statistics.consideredBlocks}<br />
    Average block time: {statistics.averageBlockTime}<br />
    Average difficulty: {statistics.averageDifficulty}<br />
    Hash rate: {statistics.hashRate}<br />

  <BarChart values={statistics.difficulties} title='Difficulties' />
    <BarChart values={statistics.blockTimes} title='Block Times' />
  </div>
);

Statistics.propTypes = {
  statistics: PropTypes.object,
};

export default Statistics;
