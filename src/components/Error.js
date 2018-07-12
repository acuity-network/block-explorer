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
    <aside className='error__popup'>
      <h1 className='error__title'>Error</h1>
      <p className='error__message'>{error}</p>
      <button onClick={onDismissError} className='error__button'>Ok</button>
    </aside>
);

Error.propTypes = {
  error: PropTypes.string,
  onDismissError: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Error);
