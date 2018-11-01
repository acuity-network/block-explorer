import React from 'react';
import PropTypes from 'prop-types';

const FormatValue = ({ children = '' }) => {
  if (children && children.toString().substring(0, 2) === '0x') {
    return <span className='hash'>{children}</span>;
  }

  return children;
}

FormatValue.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.element,
  ]),
};

export default FormatValue;
