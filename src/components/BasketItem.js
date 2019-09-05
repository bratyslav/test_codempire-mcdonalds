import React from 'react';
import { connect } from 'react-redux';
import { deleteItemFromBasket } from '../redux-store/store';
import '../styles/BasketItem.css';
import PropTypes from 'prop-types';

const BasketItem = ({ item, deleteItemFromBasket }) => {
  return (
    <div>
      <div className="basket-item">
        <img src={item.image} alt="product foto" />
        <h2 className="basket-item__name">{item.name}</h2>

        <div>
          {
            item.ingredients.map(ingredient => (
              ingredient.added ? 
                <div key={ingredient.name}>{ingredient.name}</div>
                : 
                ''
            ))
          }
        </div>

        <button
          className="basket-item__delete-button"
          onClick={() => deleteItemFromBasket(item.id)}
        >
          ×
        </button>
      </div>

      <hr />
    </div>
  );
};

BasketItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    ingredients: PropTypes.array.isRequired,
  }).isRequired,
  deleteItemFromBasket: PropTypes.func.isRequired,
};

const mapDispatch = (dispatch) => ({
  deleteItemFromBasket: (id) => dispatch(deleteItemFromBasket(id))
});

export default connect(null, mapDispatch)(BasketItem);