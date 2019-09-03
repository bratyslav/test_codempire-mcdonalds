import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ProductPage.css';
import Header from './Header';
import Footer from './Footer';

const ProductPage = ({ match }) => {
  const item = [{id: 0, name: 'a', description: 'a', image: 'https://www.mcdonalds.ua/content/dam/Ukraine/Item_Images/thumb.Sdwch_BigMac.png'}]
    .find(item => item.id === match.params.productName);

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
        <Link className="product-page__add-button" to="/basket">
          Додати в Кошик
        </Link>
      </main>
      <Footer />
    </div>
  );
};

export default ProductPage;