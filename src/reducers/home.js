export default function (store = {}, action) {
  console.log('global store', store);
  console.log('action', action);
  return store;
}
