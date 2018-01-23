import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions/creators';

// this component needs to be rewritten – was only added for testing purposes!
const mapDispatchToProps = (dispatch) => ({
  onSubmitSearch: () => {
    const query = document.getElementById('searchQuery').value;
    dispatch(actions.searchFor(query));
  },
});

const Search = ({ onSubmitSearch }) => (
  <div>
    <input id="searchQuery" placeholder="Block #, Transaction #, Address"></input>
    <button type="button" onClick={onSubmitSearch}>Search</button>
  </div>
);

export default connect(null, mapDispatchToProps)(Search);
