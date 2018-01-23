import React from 'react';

import Search from './Search';
import Switcher from './Switcher';

const App = () => (
  <div>
    <header>
      <h1>Mix Block Explorer</h1>
      <Search />
    </header>
    <Switcher />
  </div>
);

export default App;
