import React from 'react';
import { connect } from 'react-redux';

import * as actions from '@/actions/creators';

import Blocks from '@/components/Blocks';

const mapDispatchToProps = (dispatch) => ({
  fetchBlocks: () => dispatch(actions.fetchBlocks()),
});

class BlocksRoute extends React.Component {
  componentDidMount() {
    this.props.fetchBlocks();
  }

  render() {
    return (<Blocks />);
  }
}

export default connect(null, mapDispatchToProps)(BlocksRoute);
