import React from 'react';
import { connect } from 'react-redux';

import * as actions from '@/actions/creators';
import * as selectors from '@/reducers/selectors';
import { isHexString } from '@/adapters/web3';

import Block from '@/components/Block';

const mapStateToProps = (state, ownProps) => {
  const blockAddress = ownProps.match.params.blockNumber;
  const isBlockNumber = !isHexString(blockAddress);

  return {
    blockInState: selectors.getBlockInState(state, ownProps.match.params.blockNumber),
    blockNumber: isBlockNumber ? blockAddress : selectors.getBlockNumberFromHash(state, blockAddress),
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchSingleBlock: (blockNumber) => dispatch(actions.fetchBlocks(blockNumber, 1)),
});

class BlockRoute extends React.Component {
  componentDidMount() {
    if (!this.props.blockInState) {
      const blockNumber = this.props.match.params.blockNumber;
      this.props.fetchSingleBlock(blockNumber);
    }
  }

  render() {
    return (<Block blockNumber={this.props.blockNumber} />);
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlockRoute);
