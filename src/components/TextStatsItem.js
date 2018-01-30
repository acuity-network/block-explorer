import React from 'react';
import PropTypes from 'prop-types';

const TextStatsItem = ({ name = '', value = '' }) => (
  <div className='text-stats__item'>
    <p className='text-stats__name'>{name}</p>
    <p>{value}</p>
  </div>
);

TextStatsItem.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
};

export default TextStatsItem;
