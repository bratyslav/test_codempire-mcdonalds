import { createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk";

// state

const state = {
  data: null,
  loaded: false,
  basketItems: []
};

// constants

const SET_DATA = 'setData';
const ADD_TO_BASKET = 'addToBasket';
const DELETE_ALL_FROM_BASKET = 'deleteAllFromBasket';
const DELETE_ITEM_FROM_BASKET = 'deleteItemFromBasket';
const CHANGE_COUNT_OF_BASKET_ITEM = 'changeCount';

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

export const changeCountOfBasketItem = (id, direction) => ({
  type: CHANGE_COUNT_OF_BASKET_ITEM,
  id,
  direction
});

// reducer

const reducer = (state, action) => {
  switch (action.type) {
    case SET_DATA:
      console.log(action.data)
      return {
        ...state,
        data: action.data.items,
        loaded: true
      };
    case ADD_TO_BASKET:
      const currentItem = state.basketItems.find(item => (
        item.id === action.item.id
      ));

      if (!currentItem) {
        return {
          ...state,
          basketItems: [
            ...state.basketItems,
            {
              ...action.item,
              count: 1
            }
          ]
        };
      };

      return {
        state,
        basketItems: state.basketItems.map(item => {
          if (item.id === currentItem.id) {
            return {
              ...item,
              count: currentItem.count + 1
            };
          };

          return item;
        })
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

    case CHANGE_COUNT_OF_BASKET_ITEM:
      return {
        state,
        basketItems: state.basketItems.map(item => {
          if (item.id === action.id) {
            return {
              ...item,
              count: action.direction ?
                item.count + 1
                :
                item.count === 1 ?
                  item.count
                  :
                  item.count - 1
            };
          };

          return item;
        })
      };

    default:
      return state;  
  }
};

// store

export const store = createStore(reducer, state, applyMiddleware(thunk));