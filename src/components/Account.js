import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({

});

const Account = ({ block = {} }) => (
  <div>
    <h2>Single Account!</h2>
  </div>
);

export default connect(mapStateToProps)(Account);
