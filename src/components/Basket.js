import React from 'react';
import { connect } from 'react-redux';
import { deleteAllFromBasket } from '../redux-store/store';
import { Link } from 'react-router-dom';
import '../styles/Basket.css';
import BasketItem from './BasketItem';

const Basket = ({ items, deleteAllFromBasket }) => {
  return (
    <main className="basket">
      <h1>Кошик</h1>
      <Link
        to="/"
        className="basket__link-to-menu"
      >
        ⇦ меню
      </Link>
      {
        items ?
        items.map(item => <BasketItem item={item} key={item.id} />)
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

const mapState = (state) => ({
  items: state.basketItems 
});

const mapDispatch = (dispatch) => ({
  deleteAllFromBasket: () => dispatch(deleteAllFromBasket())
});

export default connect(mapState, mapDispatch)(Basket);