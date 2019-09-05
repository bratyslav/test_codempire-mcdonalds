import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/MenuItem.css';
import PropTypes from 'prop-types';

const MenuItem = ({ item }) => {
  return (
    <Link className="menu-item" to={`/product/${item.id}`}>
      <img className="menu-item__image" src={item.image} alt="product foto"/>
      <h2>{item.name}</h2>
    </Link>
  );
};

MenuItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    ingredients: PropTypes.array,
  }),
};

export default MenuItem;