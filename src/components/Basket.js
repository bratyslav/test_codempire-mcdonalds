import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Basket.css';
import Header from './Header';
import Footer from './Footer';
import BasketItem from './BasketItem';

const Basket = () => {
  return (
    <div>
      <Header />
      <main className="basket">
        <h1>Basket</h1>
        <BasketItem />
        <div className="basket__buttons-wrapper">
          <button>Оформити замовлення</button>
          <button>
            <Link to="/" className="basket__close">Завершити</Link>
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Basket;