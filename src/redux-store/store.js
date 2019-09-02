import { createStore } from 'redux';

const state = {
  state: ''
};

const TEST = 'test';

export const testAction = () => ({
  type: TEST
});

const reducer = (state, action) => {
  switch (action.type) {
    case TEST:
      alert('Hello from redux!');
      return state;
    default:
      return state;  
  }
};

export const store = createStore(reducer, state);