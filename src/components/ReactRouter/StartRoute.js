import React from 'react';
import { connect } from 'react-redux';

import * as actions from '@/actions/creators';

import Start from '@/components/Start';

const mapDispatchToProps = (dispatch) => ({
  fetchStatistics: () => dispatch(actions.fetchStatistics()),
});

class StartRoute extends React.Component {
  componentDidMount() {
    this.props.fetchStatistics();
  }

  render() {
    return <Start />;
  }
}

export default connect(null, mapDispatchToProps)(StartRoute);
