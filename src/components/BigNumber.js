import PropTypes from 'prop-types';

import { transformBigNumber } from '@/helpers/numbers';

const BigNumber = ({ children, unit }) => {
  const { number, prefix } = transformBigNumber(children);
  return `${number} ${prefix}${unit}`;
};

BigNumber.propTypes = {
  children: PropTypes.number,
  unit: PropTypes.string,
};

export default BigNumber;
