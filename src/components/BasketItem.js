import React from 'react';
import { connect } from 'react-redux';
import { deleteItemFromBasket } from '../redux-store/store';
import '../styles/BasketItem.css';

const BasketItem = ({ item, deleteItemFromBasket }) => {
  return (
    <div>
      <div className="basket-item">
        <img src={item.image} alt="product foto" />
        <h2 className="basket-item__name">{item.name}</h2>
        <div className="basket-item__count-wrapper">
          <button>+</button>
          <div className="basket-item__count">{item.count}</div>
          <button>-</button>

          <button
            className="basket-item__delete-button"
            onClick={() => deleteItemFromBasket(item.id)}
          >
            ×
          </button>
        </div>
      </div>

      <hr />
    </div>
  );
};

const mapDispatch = (dispatch) => ({
  deleteItemFromBasket: (id) => dispatch(deleteItemFromBasket(id))
});

export default connect(null, mapDispatch)(BasketItem);