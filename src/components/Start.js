import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getIsUsingFallback } from '@/adapters/web3/init';
import { getLatestBlocksForDisplay } from '@/reducers/selectors';

import BlockTable from './BlockTable';

const mapStateToProps = (state) => ({
  blocks: getLatestBlocksForDisplay(state),
});

const Start = ({ blocks = [] }) => (
  <div>
    <h2>Welcome!</h2>
    Connected to {getIsUsingFallback()
      ? 'MIX (rpc.mix-blockchain.org)'
      : 'your Web3 browser extension (e.g. Metamask)'
    }
    <BlockTable blocks={blocks} title='Latest Blocks' />
  </div>
);

Start.propTypes = {
  blocks: PropTypes.array,
};

export default connect(mapStateToProps)(Start);
