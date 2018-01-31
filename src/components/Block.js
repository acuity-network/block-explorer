import React from 'react';
import { connect } from 'react-redux';
import Link from 'redux-first-router-link';

import { getBlockForDisplay } from '@/reducers/selectors';

import DetailList from './DetailList';
import DetailListItem from './DetailListItem';
import BigNumber from './BigNumber';

const mapStateToProps = (state) => ({
  block: getBlockForDisplay(state, state.location.payload.blockNumber),
});

const Block = ({ block = {} }) => (
  <div>
    <h2 className='content-block__title'>Block # {block.number.value}</h2>
    <DetailList>
      <DetailListItem name='Hash' value={block.hash.value} />
      <DetailListItem
        name='Transactions'
        value={<Link to={{
          type: block.transactions.linkType,
          payload: block.transactions.linkPayload,
        }}>{block.transactions.value}</Link>}
      />
      <DetailListItem name='Timestamp' value={block.time.value} />
      <DetailListItem
        name='Mined by'
        value={<Link to={{
          type: block.miner.linkType,
          payload: block.miner.linkPayload,
        }}>{block.miner.value}</Link>}
      />
      <DetailListItem
        name='Difficulty'
        value={<BigNumber unit='H'>{block.difficulty.value}</BigNumber>}
      />
      <DetailListItem name='Gas Limit' value={block.gasLimit.value} />
      <DetailListItem name='Gas used' value={block.gasUsed.value} />
      <DetailListItem name='Size' value={block.size.value} />
      <DetailListItem name='Uncles' value={block.uncles.value} />
      <DetailListItem name='Nonce' value={block.nonce.value} />
    </DetailList>
  </div>
);

export default connect(mapStateToProps)(Block);
