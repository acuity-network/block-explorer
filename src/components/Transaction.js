import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Link from 'redux-first-router-link';

import * as selectors from '@/reducers/selectors';
import * as routes from '@/router';

import DetailList from './DetailList';
import DetailListItem from './DetailListItem';
import BigNumber from './BigNumber';

const mapStateToProps = (state) => ({
  transaction: selectors.getCurrentTransactionForDisplay(state),
});

const Transaction = ({ transaction }) => (
  <div>
    <h2 className='content-block__title list-title'>Transaction Details</h2>
    <DetailList>
      <DetailListItem name='Hash' value={transaction.hash} />
      <DetailListItem
        name='Block Number'
        value={<Link to={{
          type: routes.BLOCK_DETAIL,
          payload: { blockNumber: transaction.blockNumber }
        }}>{transaction.blockNumber}</Link>} />
      <DetailListItem name='Amount' value={`${transaction.valueInEther} Ether`} />
      <DetailListItem
        name='Gas Price'
        value={<BigNumber unit='Wei'>{transaction.gasPriceInWei}</BigNumber>}
      />
      <DetailListItem
        name='Sender'
        value={<Link to={{
          type: routes.ACCOUNT_DETAIL,
          payload: { address: `_${transaction.from}` }
        }}>{transaction.from}</Link>}
      />
      <DetailListItem
        name='Receiver'
        value={<Link to={{
          type: routes.ACCOUNT_DETAIL,
          payload: { address: `_${transaction.to}` }
        }}>{transaction.to}</Link>}
      />
    </DetailList>
  </div>
);

Transaction.propTypes = {
  transaction: PropTypes.object,
};

export default connect(mapStateToProps)(Transaction);
