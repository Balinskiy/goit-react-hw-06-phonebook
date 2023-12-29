import { createStore } from 'redux';
const reducer = state => {
  return state;
};

const store = createStore(reducer, { counter: 0 });

console.log('store', store.getState());
