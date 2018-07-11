import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom'

import registerServiceWorker from './registerServiceWorker';
import store from './store';
import { initializeWeb3 } from '@/adapters/web3';

import App from './components/App';
import '@/styles/index.scss';

initializeWeb3();

render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
