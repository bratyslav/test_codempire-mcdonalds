import { createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
const state = {
  data: ''
};

const SET_DATA = 'setData';

const setData = (data) => ({
  type: SET_DATA,
  data
});

export const loadDB = () => {
  return (dispatch) => {
    return fetch('http://localhost:4000/items')
      .then(db => db.json())
      .then(db => {
        dispatch(setData(db));
      })
  }
};

const reducer = (state, action) => {
  switch (action.type) {
    case SET_DATA:
      return {
        ...state,
        data: action.data
      };
    default:
      return state;  
  }
};

export const store = createStore(reducer, state, applyMiddleware(thunk));