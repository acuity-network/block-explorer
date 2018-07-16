import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as selectors from '@/reducers/selectors';
import { getCurrency } from '@/adapters/web3';

import DetailList from './DetailList';
import DetailListItem from './DetailListItem';

const mapStateToProps = (state, { address }) => ({
  address: selectors.getAddressForDisplay(state, address),
});

const Address = ({ address }) => (
  <div className='mix-content-wrapper'>
    <h2 className='content-block__title'>Address Details</h2>
    <DetailList>
      <DetailListItem name='Address' value={address.address} />
      <DetailListItem name='Tx Count' value={address.transactionCount} />
      <DetailListItem
        name={`Balance (${getCurrency()})`}
        value={address.balanceInEther}
      />
      <DetailListItem name='Balance (Wei)' value={`${address.balanceInWei} Wei`} />
    </DetailList>
  </div>
);

Address.propTypes = {
  address: PropTypes.object,
};

export default connect(mapStateToProps)(Address);
