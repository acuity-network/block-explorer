import React from 'react';
import { connect } from 'react-redux';

import * as actions from '@/actions/creators';
import * as selectors from '@/reducers/selectors';
import { isHexString } from '@/adapters/web3';

import Block from '@/components/Block';

const mapStateToProps = (state, { match }) => {
  const blockAddress = match.params.blockNumber;
  const isBlockNumber = !isHexString(blockAddress);

  return {
    blockInState: selectors.getBlockInState(state, blockAddress),
    blockNumber: isBlockNumber ? blockAddress : selectors.getBlockNumberFromHash(state, blockAddress),
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchSingleBlock: (blockNumber) => dispatch(actions.fetchBlocks(blockNumber, 1)),
  fetchTransactions: (blockNumber) => dispatch(actions.fetchTransactionsForBlock(blockNumber)),
});

class BlockRoute extends React.Component {
  componentDidMount() {
    if (!this.props.blockInState) {
      const blockNumber = this.props.match.params.blockNumber;
      this.props.fetchSingleBlock(blockNumber);
      this.props.fetchTransactions(blockNumber);
    }
  }

  render() {
    return <Block blockNumber={this.props.blockNumber} />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlockRoute);
