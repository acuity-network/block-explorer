import React from 'react';
import PropTypes from 'prop-types';

const Statistics = ({ statistics = {} }) => (
  <div>
    Peer count: {statistics.peerCount}<br />
    Gas price: {statistics.gasPriceInGwei} Gwei<br />
    Latest block number: {statistics.latestBlockNumber}<br />
    Considered blocks: {statistics.consideredBlocks}<br />
    Average block time: {statistics.averageBlockTime}<br />
    Average difficulty: {statistics.averageDifficulty}<br />
    Hash rate: {statistics.hashRate}<br />
  </div>
);

Statistics.propTypes = {
  statistics: PropTypes.object,
};

export default Statistics;
