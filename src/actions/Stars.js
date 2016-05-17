import { CALL_API } from 'redux-api-middleware';

export function getStars(user) {
  return {
    [CALL_API]: {
      endpoint: `https://api.github.com/users/${user}/starred`,
      method: 'GET',
      types: ['STARS_REQUEST', 'STARS_SUCCESS', 'STARS_FAILURE'],
    },
  };
}
