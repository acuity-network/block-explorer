import React from 'react';
import PropTypes from 'prop-types';

const DetailListItem = ({ name = '', value = '' }) => (
  <div>
    <dt>{name}</dt>
    <dd>{value}</dd>
  </div>
);

DetailListItem.propTypes = {
  name: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
  ]),
};

export default DetailListItem;
