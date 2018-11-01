import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getSingleBlock } from '@/reducers/selectors';

import DetailList from './DetailList';
import DetailListItem from './DetailListItem';
import BigNumber from './BigNumber';
import Transactions from './Transactions';

const mapStateToProps = (state, { blockNumber }) => ({
  block: getSingleBlock(state, blockNumber),
});

const Block = ({ block = {} }) => [
  <div key='block-data' className='mix-content-wrapper'>
    <h2 className='content-block__title'>Block # {block.number}</h2>
    <DetailList>
      <DetailListItem name='Hash' value={block.hash} />
      <DetailListItem
        name='Transactions'
        value={block.transactions ? block.transactions.length : 0}
      />
      <DetailListItem name='Timestamp' value={new Date(block.timestamp * 1000).toLocaleString()} />
      <DetailListItem
        name='Mined by'
        linkTarget={`/address/${block.miner}`}
        value={block.miner}
      />
      <DetailListItem name='Gas Limit' value={block.gasLimit} />
      <DetailListItem name='Gas used' value={block.gasUsed} />
      <DetailListItem
        name='Difficulty'
        value={<BigNumber unit='H'>{block.difficulty}</BigNumber>}
      />
      <DetailListItem name='Size' value={block.size} />
      <DetailListItem name='Uncles' value={block.uncles ? block.uncles.length : '0'} />
      <DetailListItem name='Nonce' value={block.nonce} />
    </DetailList>
  </div>
  ,
  block.transactions && block.transactions.length > 0
    && <Transactions key='block-transactions' blockNumber={block.number} />
];

Block.propTypes = {
  block: PropTypes.object,
};

export default connect(mapStateToProps)(Block);
