import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './views/App';
import Home from './views/Home';
import About from './views/About';
import NoMatch from './views/NoMatch';

// If you use React Router, make this component
// render <Router> with your routes. Currently,
// only synchronous routes are hot reloaded, and
// you will see a warning from <Router> on every reload.
// You can ignore this warning. For details, see:
// https://github.com/reactjs/react-router/issues/2182

export default function Routes() {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="about" component={About} />
        <Route path="*" component={NoMatch} />
      </Route>
    </Router>
  );
}
