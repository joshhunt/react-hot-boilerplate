import { createStore, applyMiddleware, compose } from 'redux';
import { apiMiddleware } from 'redux-api-middleware';
import thunk from 'redux-thunk';

import reducers from './reducers';

export default function (data = {}) {
  const middleware = [
    apiMiddleware,
    thunk,
  ];

  const store = createStore(
    reducers,
    data,
    compose(
      applyMiddleware(...middleware),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );

  // Enable Webpack hot module replacement for reducers
  if (module.hot) {
    module.hot.accept('./reducers', () => {
      store.replaceReducer(require('./reducers').default); // eslint-disable-line global-require
    });
  }

  return store;
}
