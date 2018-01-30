import React from 'react';
import PropTypes from 'prop-types';

import TextStatsItem from './TextStatsItem';
import BarChart from './BarChart';
import BigNumber from './BigNumber';

const Statistics = ({ statistics = {} }) => (
  <div className='content-block'>
    <p className='content-block__title'>Stats</p>
    <div className='text-stats'>
      <TextStatsItem name='Peer Count' value={statistics.peerCount} />
      <TextStatsItem name='Gas Price' value={`${statistics.gasPriceInGwei} Gwei`} />
      <TextStatsItem name='Latest Block Number' value={statistics.latestBlockNumber} />
      <TextStatsItem
        name='Average Block Time*'
        value={<BigNumber unit='s'>{statistics.averageBlockTime}</BigNumber>}
      />
      <TextStatsItem
        name='Average Difficulty*'
        value={<BigNumber unit='H'>{statistics.averageDifficulty}</BigNumber>}
      />
      <TextStatsItem
        name='Hash Rate*'
        value={<BigNumber unit='H/s'>{statistics.hashRate}</BigNumber>}
      />
    </div>
    <p className='fineprint'>* Based on the latest {statistics.consideredBlocks} Blocks</p>

    <BarChart values={statistics.difficulties} title='Difficulties' />
    <BarChart values={statistics.blockTimes} title='Block Times' />
  </div>
);

Statistics.propTypes = {
  statistics: PropTypes.object,
};

export default Statistics;
