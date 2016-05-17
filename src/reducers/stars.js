const substoreKey = 'stars';
const defaultSubstore = {};

export default function (store = {}, action) {
  // boilerplate rubbish
  let newSubstore;
  const prevSubStore = store[substoreKey] || defaultSubstore;

  if (!store[substoreKey]) {
    newSubstore = defaultSubstore
  }

  // Action action switch statement
  switch (action.type) {
    case 'STARS_SUCCESS':
      newSubstore = { items: action.payload };
      break;
  }

  // boilerplate rubbish
  if (newSubstore) {
    store = {
      ...store,
      [substoreKey]: newSubstore
    }
  }

  return store;
}
