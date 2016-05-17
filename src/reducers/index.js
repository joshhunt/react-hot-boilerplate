import reduceReducers from 'reduce-reducers';

import home from './home';
import stars from './stars';

export default reduceReducers(
  home,
  stars,
);
