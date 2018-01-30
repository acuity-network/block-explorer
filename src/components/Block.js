import React from 'react';
import { connect } from 'react-redux';

import { getBlockForDisplay } from '@/reducers/selectors';

const mapStateToProps = (state) => ({
  block: getBlockForDisplay(state, state.location.payload.blockNumber),
});

const Block = ({ block = {} }) => (
  <div>
    <h2>Single Block!</h2>
    <ul>
      {Object.keys(block).map(key => {
        if (typeof block[key] === Object || !block[key].value) {
          return null;
        }
        return (
          <li>{key}: {block[key].value}</li>
        );
      })}
    </ul>
  </div>
);

export default connect(mapStateToProps)(Block);
