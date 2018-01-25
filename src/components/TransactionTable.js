import React from 'react';
import PropTypes from 'prop-types';

import { tableFields } from '@/constants';

import Table from './Table';

const TransactionTable = ({ transactions = [], title = 'Transactions' }) => (
  <Table
    dataArray={transactions}
    fields={tableFields.transactions}
    title={title}
  />
);

TransactionTable.propTypes = {
  blocks: PropTypes.array,
  title: PropTypes.string,
};

export default TransactionTable;
