import React from 'react';
import { Route, Switch } from 'react-router-dom';

import StartRoute from '@/components/ReactRouter/StartRoute';
import AccountRoute from '@/components/ReactRouter/AccountRoute';
import BlockRoute from '@/components/ReactRouter/BlockRoute';
import BlocksRoute from '@/components/ReactRouter/BlocksRoute';
import TransactionRoute from '@/components/ReactRouter/TransactionRoute';
import TransactionsRoute from '@/components/ReactRouter/TransactionsRoute';

const Switcher = () => (
  <Switch>
    <Route
      path='/'
      component={StartRoute}
      exact
    />
    <Route
      path='/accounts/:address'
      component={AccountRoute}
    />
    <Route
      path='/blocks'
      component={BlocksRoute}
      exact
    />
    <Route
      path='/blocks/:blockNumber'
      component={BlockRoute}
      exact
    />
    <Route
      path='/blocks/:blockNumber/transactions'
      component={TransactionsRoute}
    />
    <Route
      path='/transactions/:hash'
      component={TransactionRoute}
    />
  </Switch>
);

export default Switcher;
