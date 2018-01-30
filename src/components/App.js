import React from 'react';

import { getIsUsingFallback } from '@/adapters/web3/init';

import Search from './Search';
import Switcher from './Switcher';

const App = () => (
  <div className='mix-app'>
    <header className='mix-header'>
      <div>
        <h1 className='mix-header__title'>Block Explorer</h1>
        <p className='connection-info'>Connected to {getIsUsingFallback()
          ? 'MIX (rpc.mix-blockchain.org)'
          : 'your Web3 browser extension (e.g. Metamask)'}
        </p>
      </div>
      <Search />
    </header>
    <Switcher />
  </div>
);

export default App;
