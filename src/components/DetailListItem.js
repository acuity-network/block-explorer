import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import FormatValue from './FormatValue';

const DetailListItem = ({ name = '', linkTarget = '', value = '' }) => (
  <div className='list__item'>
    <dt className='list__key'>{name}</dt>
    <dd className='list__value'>{linkTarget
      ? <Link to={linkTarget}><FormatValue>{value}</FormatValue></Link>
      : <FormatValue>{value}</FormatValue>
    }</dd>
  </div>
);

DetailListItem.propTypes = {
  name: PropTypes.string,
  link: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.element,
  ]),
};

export default DetailListItem;
