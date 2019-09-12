import { createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk";

// state

const state = {
  data: null,
  loaded: false,
  basketItems: [],
  searchingStr: '',
};

// constants

const SET_DATA = 'setData';
const SET_SEARCHING_STR = 'setSearchingStr'
const ADD_TO_BASKET = 'addToBasket';
const DELETE_ALL_FROM_BASKET = 'deleteAllFromBasket';
const DELETE_ITEM_FROM_BASKET = 'deleteItemFromBasket';

//actions

const setData = (data) => ({
  type: SET_DATA,
  data
});

export const loadData = () => {
  return (dispatch) => {
    fetch('https://lit-headland-35682.herokuapp.com/db')
      .then(db => db.json())
      .then(db => {
        dispatch(setData(db));
      });
  };
};

export const setSearchingStr = (str) => ({
  type: SET_SEARCHING_STR,
  str
});

export const addToBasket = (item) => ({
  type: ADD_TO_BASKET,
  item
});

export const deleteAllFromBasket = () => ({
  type: DELETE_ALL_FROM_BASKET
});

export const deleteItemFromBasket = (id) => ({
  type: DELETE_ITEM_FROM_BASKET,
  id
});

// reducer

const reducer = (state, action) => {
  switch (action.type) {
    case SET_DATA:
      return {
        ...state,
        data: action.data.items,
        loaded: true
      };

    case SET_SEARCHING_STR:
      return {
        ...state,
        searchingStr: action.str.toLowerCase(),
      }

    case ADD_TO_BASKET:
      return {
        ...state,
        basketItems: [
          ...state.basketItems,
          action.item,
        ]
      };

    case DELETE_ALL_FROM_BASKET:
      return {
        ...state,
        basketItems: []
      };

    case DELETE_ITEM_FROM_BASKET:
      return {
        ...state,
        basketItems: state.basketItems.filter(item => item.id !== action.id)
      };

    default:
      return state;  
  }
};

// store

export const store = createStore(reducer, state, applyMiddleware(thunk));