import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import App from './views/App';
import Home from './views/Home';
import About from './views/About';
import NoMatch from './views/NoMatch';

export default function Routes() {
  return (
    <Router history={browserHistory}>
      <Route component={App}>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="*" component={NoMatch} />
      </Route>
    </Router>
  );
}
