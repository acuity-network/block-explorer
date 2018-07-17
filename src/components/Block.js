import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getSingleBlock } from '@/reducers/selectors';

import DetailList from './DetailList';
import DetailListItem from './DetailListItem';
import BigNumber from './BigNumber';

const mapStateToProps = (state, { blockNumber }) => ({
  block: getSingleBlock(state, blockNumber),
});

const Block = ({ block = {} }) => (
  <div className='mix-content-wrapper'>
    <h2 className='content-block__title'>Block # {block.number}</h2>
    <DetailList>
      <DetailListItem name='Hash' value={block.hash} />
      {block.transactions && block.transactions.length > 0
        ? <DetailListItem
            name='Transactions'
            value={<Link to={`/block/${block.number}/transactions`}>{block.transactions.length}</Link>}
          />
        : <DetailListItem name='Transactions' value='0' />
      }

      <DetailListItem name='Timestamp' value={new Date(block.timestamp * 1000).toLocaleString()} />
      <DetailListItem
        name='Mined by'
        value={<Link to={`/address/${block.miner}`}>{block.miner}</Link>}
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
);

Block.propTypes = {
  block: PropTypes.object,
};

export default connect(mapStateToProps)(Block);
