import React from 'react';

import MixVortex from '@/svgs/MixVortex';
import Search from '@/svgs/Search';

const SearchButton = () => (
  <button className='search-button'>
    <MixVortex
      size='60px'
      svgClass='search-button__svg'
      content={<Search size='60%' position='20%' svgClass='search-button__icon' />} />
  </button>
);

export default SearchButton;
