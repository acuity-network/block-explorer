import React from 'react';
import { Route, Switch } from 'react-router-dom';

import StartRoute from '@/components/ReactRouter/StartRoute';
import AddressRoute from '@/components/ReactRouter/AddressRoute';
import BlockRoute from '@/components/ReactRouter/BlockRoute';
import BlocksRoute from '@/components/ReactRouter/BlocksRoute';
import TransactionRoute from '@/components/ReactRouter/TransactionRoute';

const Switcher = () => (
  <Switch>
    <Route
      path='/'
      component={StartRoute}
      exact
    />
    <Route
      path='/address/:address'
      component={AddressRoute}
    />
    <Route
      path='/blocks'
      component={BlocksRoute}
      exact
    />
    <Route
      path='/block/:blockNumber'
      component={BlockRoute}
      exact
    />
    <Route
      path='/transaction/:hash'
      component={TransactionRoute}
    />
  </Switch>
);

export default Switcher;
