import React from 'react';
import PropTypes from 'prop-types';

import { tableFields } from '@/constants';

import Table from './Table';

const BlockTable = ({ blocks = [], title = 'Blocks' }) => (
  <Table
    dataArray={blocks}
    fields={tableFields.blocks}
    title={title}
  />
);

BlockTable.propTypes = {
  blocks: PropTypes.array,
  title: PropTypes.string,
};

export default BlockTable;
