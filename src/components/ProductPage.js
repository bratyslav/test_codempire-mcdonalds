import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToBasket } from '../redux-store/store';
import '../styles/ProductPage.css';
import Header from './Header';
import Footer from './Footer';

const ProductPage = ({ match, items, addToBasket }) => {
  const item = items.find(item => item.id === match.params.productName);

  return (
    <div>
      <Header />
      <main className="product-page">
        <h1>{item.name}</h1>
        <img
          className="product-page__product-image"
          src={item.image}
          alt="product foto"
        />
        <div className="product-page__description">
          {item.description}
        </div>
        <Link
          className="product-page__add-button"
          to="/basket"
          onClick={() => addToBasket(item)}
        >
          Додати в Кошик
        </Link>
      </main>
      <Footer />
    </div>
  );
};

const mapState = (state) => ({
  items: state.data
});

const mapDispatch = (dispatch) => ({
  addToBasket: (item) => dispatch(addToBasket(item))
});

export default connect(mapState, mapDispatch)(ProductPage);