import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import App from './App';
import './index.css';
import store from './store/store';

render(
  <Provider store={store}>
    <MemoryRouter initialEntries={['/']}>
      <App title={'App'} />
    </MemoryRouter>
  </Provider>,
  window.document.querySelector('#root')
);

if (module.hot) module.hot.accept();
