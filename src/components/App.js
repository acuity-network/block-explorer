import React from 'react';
import Link from 'redux-first-router-link';

import { getIsUsingFallback } from '@/adapters/web3/init';

import Logo from './Logo';
import Search from './Search';
import Switcher from './Switcher';

const App = () => (
  <div className='mix-app'>
    <header className='mix-header'>
      <div>
        <Link to='/' className='mix-header__link'>
          <h1 className='mix-header__title'>Block Explorer</h1>
        </Link>
        <p className='mix-header__fineprint'>Connected to {getIsUsingFallback()
          ? 'MIX (rpc.mix-blockchain.org)'
          : 'your Web3 browser extension (e.g. Metamask)'}
        </p>
      </div>
      <Search />
    </header>
    <Switcher />
    <footer>
      <p>powered by</p>
      <Logo />
      <p>MIX Blockchain</p>
    </footer>
  </div>
);

export default App;
