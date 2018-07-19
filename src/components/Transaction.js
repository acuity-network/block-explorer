import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as selectors from '@/reducers/selectors';
import { getCurrency } from '@/adapters/web3';

import DetailList from './DetailList';
import DetailListItem from './DetailListItem';

const mapStateToProps = (state, { hash }) => ({
  transaction: selectors.getTransactionForDisplay(state, hash),
});

const Transaction = ({ transaction }) => (
  <div className='mix-content-wrapper'>
    <h2 className='content-block__title list-title'>Transaction Details</h2>
    <DetailList>
      <DetailListItem name='Hash' value={transaction.hash} />
      <DetailListItem
        name='Block Number'
        linkTarget={`/block/${transaction.blockNumber}`}
        value={transaction.blockNumber}
      />
      <DetailListItem name='Amount' value={`${transaction.valueInEther} ${getCurrency()}`} />
      <DetailListItem
        name='Gas Price'
        value={`${transaction.gasPriceInGwei} Gwei`}
      />
      <DetailListItem
        name='Sender'
        linkTarget={`/address/${transaction.from}`}
        value={transaction.from}
      />
      <DetailListItem
        name='Receiver'
        linkTarget={`/address/${transaction.to}`}
        value={transaction.to}
      />
    </DetailList>
  </div>
);

Transaction.propTypes = {
  transaction: PropTypes.object,
};

export default connect(mapStateToProps)(Transaction);
