import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as selectors from '@/reducers/selectors';

import DetailList from './DetailList';
import DetailListItem from './DetailListItem';

const mapStateToProps = (state, ownProps) => ({
  account: selectors.getAccountForDisplay(state, ownProps.address),
});

const Account = ({ account = {} }) => (
  <div className='mix-content-wrapper'>
    <h2 className='content-block__title'>Account Details</h2>
    <DetailList>
      <DetailListItem name='Address' value={account.address} />
      <DetailListItem name='Tx Count' value={account.transactionCount} />
      <DetailListItem
        name='Balance (MIX)'
        value={account.balanceInEther}
      />
      <DetailListItem name='Balance (Wei)' value={`${account.balanceInWei} Wei`} />
    </DetailList>
  </div>
);

Account.propTypes = {
  account: PropTypes.object,
};

export default connect(mapStateToProps)(Account);
