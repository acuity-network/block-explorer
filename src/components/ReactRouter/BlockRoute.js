import React from 'react';
import { connect } from 'react-redux';

import * as actions from '@/actions/creators';
import * as selectors from '@/reducers/selectors';

import Block from '@/components/Block';

const mapStateToProps = (state, { match }) => ({
  blockInState: selectors.getBlockInState(state, match.params.blockNumber),
});

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
    const blockNumber = this.props.match.params.blockNumber;
    return <Block blockNumber={blockNumber} />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlockRoute);
