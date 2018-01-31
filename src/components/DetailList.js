import React from 'react';
import PropTypes from 'prop-types';

const DetailList = ({ children = [] }) => (
  <dl>
    {children}
  </dl>
);

DetailList.propTypes = {
  children: PropTypes.array,
};

export default DetailList;
