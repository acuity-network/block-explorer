import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as actions from '@/actions/creators';
import * as selectors from '@/reducers/selectors';

const mapStateToProps = (state) => ({
  error: selectors.getError(state),
});

const mapDispatchToProps = (dispatch) => ({
  onDismissError: () => dispatch(actions.dismissError()),
});

const Error = ({ error, onDismissError }) => (
  error &&
    <aside>
      <h1>Error</h1>
      <p>{error}</p>
    </aside>
);

Error.propTypes = {
  error: PropTypes.string,
  onDismissError: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Error);
