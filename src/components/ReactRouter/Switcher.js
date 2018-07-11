import React from 'react';
import { Route } from 'react-router-dom';

import StartRoute from '@/components/ReactRouter/StartRoute';
import AccountRoute from '@/components/ReactRouter/AccountRoute';
import BlockRoute from '@/components/ReactRouter/BlockRoute';
import BlocksRoute from '@/components/ReactRouter/BlocksRoute';
import TransactionRoute from '@/components/ReactRouter/TransactionRoute';
import TransactionsRoute from '@/components/ReactRouter/TransactionsRoute';

const Switcher = () => [
  <Route
    key='start'
    path='/'
    component={StartRoute}
    exact
  />
  ,
  <Route
    key='account'
    path='/accounts/:address'
    component={AccountRoute}
  />
  ,
  <Route
    key='blocks'
    path='/blocks'
    component={BlocksRoute}
    exact
  />
  ,
  <Route
    key='blockDetail'
    path='/blocks/:blockNumber'
    component={BlockRoute}
    exact
  />
  ,
  <Route
    key='transactions'
    path='/blocks/:blockNumber/transactions'
    component={TransactionsRoute}
  />
  ,
  <Route
    key='transactionDetail'
    path='/transactions/:hash'
    component={TransactionRoute}
  />
];

export default Switcher;
