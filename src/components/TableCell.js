import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import FormatValue from './FormatValue';

const TableCell = ({
  entry = {},
  field = {},
}) => (
  <td className='mix-table__cell' data-label={field.label}>
    {entry.linkReactRouter
      ? <Link
          to={entry.linkReactRouter}
          className='mix-table__link'
        ><FormatValue>{entry.value}</FormatValue></Link>
      : <FormatValue>{entry.value}</FormatValue>
    }
  </td>
);

TableCell.propTypes = {
  entry: PropTypes.object,
  field: PropTypes.object,
};

export default TableCell;
