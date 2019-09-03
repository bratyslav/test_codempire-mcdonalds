import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/MenuItem.css';

const MenuItem = ({ item }) => {
  return (
    <Link className="menu-item" to={`/product/${item.id}`}>
      <img className="menu-item__image" src={item.image} alt="product foto"/>
      <h2>{item.name}</h2>
    </Link>
  );
};

export default MenuItem;