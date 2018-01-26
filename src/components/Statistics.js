import React from 'react';
import PropTypes from 'prop-types';

const Statistics = ({ statistics = {} }) => (
  <div>
    Peer count: {statistics.peerCount}<br />
    Gas price: {statistics.gasPriceInGwei} Gwei<br />
    Latest block number: {statistics.latestBlockNumber}<br />
    Average Difficulty: {statistics.averageDifficulty}<br />
  </div>
);

Statistics.propTypes = {
  statistics: PropTypes.object,
};

export default Statistics;
