import React from 'react';

import Search from './Search';
import Switcher from './Switcher';

const App = () => (
  <div className='mix-app'>
    <header className='mix-header'>
      <h1 className='mix-header__title'>Block Explorer</h1>
      <Search />
    </header>
    <Switcher />
  </div>
);

export default App;
