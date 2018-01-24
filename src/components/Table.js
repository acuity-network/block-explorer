import React from 'react';
import PropTypes from 'prop-types';

import TableCell from './TableCell';

const Table = ({
  dataArray = [],
  fields = [],
  title = '',
}) => (
  <table>
    <caption>{title}</caption>

    <thead>
      <tr>
        {fields.map(field => (
          <th key={field.key}>{field.label}</th>
        ))}
      </tr>
    </thead>

    <tbody>
      {dataArray.map(dataSet => (
        <tr key={dataSet.key.value}>
          {fields.map(field => (
            <TableCell key={field.key} field={field} entry={dataSet[field.key]} />
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);

Table.propTypes = {
  dataArray: PropTypes.array,
  fields: PropTypes.array,
  title: PropTypes.string,
};

export default Table;
