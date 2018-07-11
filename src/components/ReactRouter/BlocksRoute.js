import React from 'react';
import { connect } from 'react-redux';

import * as actions from '@/actions/creators'

import Blocks from '@/components/Blocks';

const mapDispatchToProps = (dispatch) => ({
  // template
});

class BlocksRoute extends React.Component {
  componentDidMount() {
    // template
  }

  render() {
    return (<Blocks />);
  }
}

export default connect(null, mapDispatchToProps)(BlocksRoute);
