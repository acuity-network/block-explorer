import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import registerServiceWorker from './registerServiceWorker';
import store from './store';
import { initializeWeb3 } from '@/adapters/web3';
import { initializeHistory, getHistoryInstance } from '@/adapters/history';

import App from './components/App';
import '@/styles/index.scss';

initializeWeb3();
initializeHistory();

render(
  <Provider store={store}>
    <Router history={getHistoryInstance()}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
