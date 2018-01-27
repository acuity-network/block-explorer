import PropTypes from 'prop-types';

import { getUnitPrefix } from '@/helpers/numbers';

const BigNumber = ({ children, unit }) => {
  const { number, prefix } = getUnitPrefix(children);
  return `${number} ${prefix}${unit}`;
};

BigNumber.propTypes = {
  children: PropTypes.number,
  affix: PropTypes.string,
};

export default BigNumber;
