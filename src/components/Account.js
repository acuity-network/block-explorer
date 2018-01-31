import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as selectors from '@/reducers/selectors';

import DetailList from './DetailList';
import DetailListItem from './DetailListItem';
import BigNumber from './BigNumber';

const mapStateToProps = (state) => ({
  account: selectors.getCurrentAccountForDisplay(state),
});

const Account = ({ account = {} }) => (
  <div>
    <h2 className='content-block__title list-title'>Account Details</h2>
    <DetailList>
      <DetailListItem name='Address' value={account.address} />
      <DetailListItem name='Tx Count' value={account.transactionCount} />
      <DetailListItem
        name='Balance (ETH)'
        value={<BigNumber unit='Ether'>{account.balanceInEther}</BigNumber>}
      />
      <DetailListItem name='Balance (Wei)' value={`${account.balanceInWei} Wei`} />
    </DetailList>
  </div>
);

Account.propTypes = {
  account: PropTypes.object,
};

export default connect(mapStateToProps)(Account);
