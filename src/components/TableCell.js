import React from 'react';
import PropTypes from 'prop-types';
import Link from 'redux-first-router-link';

const TableCell = ({
  entry = {},
  field = {},
}) => (
  <td data-label={field.label}>
    {entry.linkType
      ? <Link to={{ type: entry.linkType, payload: entry.linkPayload }}>{entry.value}</Link>
      : entry.value
    }
  </td>
);

TableCell.propTypes = {
  entry: PropTypes.object,
  field: PropTypes.object,
};

export default TableCell;
