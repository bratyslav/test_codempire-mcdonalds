import React from 'react';
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
          <button>Завершити</button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Basket;