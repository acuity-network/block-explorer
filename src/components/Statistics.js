import React from 'react';
import PropTypes from 'prop-types';

import BarChart from './BarChart';
import BigNumber from './BigNumber';

const Statistics = ({ statistics = {} }) => (
  <div>
    Peer count: {statistics.peerCount}<br />
    Gas price: {statistics.gasPriceInGwei} Gwei<br />
    Latest block number: {statistics.latestBlockNumber}<br />
    Considered blocks: {statistics.consideredBlocks}<br />
    Average block time: <BigNumber unit='s'>{statistics.averageBlockTime}</BigNumber><br />
    Average difficulty: <BigNumber unit='H'>{statistics.averageDifficulty}</BigNumber><br />
    Hash rate: <BigNumber unit='H/s'>{statistics.hashRate}</BigNumber><br />

    <BarChart values={statistics.difficulties} title='Difficulties' />
    <BarChart values={statistics.blockTimes} title='Block Times' />
  </div>
);

Statistics.propTypes = {
  statistics: PropTypes.object,
};

export default Statistics;
