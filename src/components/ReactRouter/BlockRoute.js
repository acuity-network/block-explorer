import React from 'react';
import { connect } from 'react-redux';

import * as actions from '@/actions/creators'

import Block from '@/components/Block';

const mapDispatchToProps = (dispatch) => ({
  // template
});

class BlockRoute extends React.Component {
  componentDidMount() {
    // template
  }

  render() {
    return (<Block />);
  }
}

export default connect(null, mapDispatchToProps)(BlockRoute);
