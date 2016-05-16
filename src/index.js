import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';

import Routes from './Routes';
import createStore from './createStore';

const store = createStore();

const rootEl = document.getElementById('root');
ReactDOM.render(
  <AppContainer>
    <Provider store={store}>
      <Routes />
    </Provider>
  </AppContainer>,
  rootEl
);

if (module.hot) {
  module.hot.accept('./Routes', () => {
    const NextRoutes = require('./Routes').default;
    ReactDOM.render(
      <AppContainer>
        <Provider store={store}>
          <NextRoutes />
        </Provider>
      </AppContainer>,
      rootEl
    );
  });
}
