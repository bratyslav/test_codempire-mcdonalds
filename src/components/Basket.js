import React from 'react';
import { connect } from 'react-redux';
import { deleteAllFromBasket } from '../redux-store/store';
import { Link } from 'react-router-dom';
import '../styles/Basket.css';
import BasketItem from './BasketItem';
import PropTypes from 'prop-types';

const Basket = ({ items, deleteAllFromBasket }) => {
  if (items.length !== 0) {
    return (
      <main className="basket">
        <h1>Кошик</h1>
        <Link
          to="/"
          className="basket__link-to-menu"
        >
          ⇦ додати ще
        </Link>
        {
          items ?
            items.map((item, index) => <BasketItem item={item} key={index} />)
          : ''
        }
        <div className="basket__buttons-wrapper">
          <button>Оформити замовлення</button>
          <button>
            <Link
              to="/"
              className="basket__close"
              onClick={deleteAllFromBasket}
            >  
              Завершити
            </Link>
          </button>
        </div>
      </main>
    );
  };

  return (
    <main className="basket">
      <h1>Кошик</h1>
      <p className="basket__empty-basket-message">Зараз тут порожньо</p>
      <Link
        to="/"
        className="basket__link-to-menu"
      >
        ⇦ меню
      </Link>
    </main>
  );
};

Basket.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      ingredients: PropTypes.array.isRequired,
    })
  ),
  deleteAllFromBasket: PropTypes.func.isRequired,
}

const mapState = (state) => ({
  items: state.basketItems 
});

const mapDispatch = (dispatch) => ({
  deleteAllFromBasket: () => dispatch(deleteAllFromBasket())
});

export default connect(mapState, mapDispatch)(Basket);