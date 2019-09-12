import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToBasket } from '../redux-store/store';
import '../styles/ProductPage.css';
import '../styles/checkmark.css'
import PropTypes from 'prop-types';

const ProductPage = ({ match, items, addToBasket }) => {
  const [item, setInem] = useState(
    items ? items.find(item => item.id === match.params.productName) : null
  );

  const changeComposition = (event) => {
    setInem({
      ...item,
      ingredients: item.ingredients.map(ingredient => {
        if (ingredient.name === event.target.name) {
          return {
            ...ingredient,
            added: !ingredient.added,
          };
        };
        return ingredient;
      })
    });
  };

  if (item) {
    return (
      <main className="product-page">
        <section>
          <h1>{item.name}</h1>
          <img
            className="product-page__product-image"
            src={item.image}
            alt="product foto"
          />
          <div className="product-page__ingredients">
            <h2>Склад:</h2>
            {
              item.ingredients.map(ingredient => (
                <label key={ingredient.name}>
                  <input
                    type="checkbox"
                    className="checkbox"
                    name={ingredient.name}
                    checked={ingredient.added}
                    onChange={(event) => changeComposition(event)}
                  />
                  <span className="checkmark">✓</span>
                  {ingredient.name}
                  <br />
                </label>
              ))
            }
          </div>
        </section>

        <section className="product-page__description-section">
          <div className="product-page__description">
            {item.description}
          </div>
          <Link
            className="product-page__add-button"
            to="/basket"
            onClick={() => addToBasket({...item, id: new Date().getTime()})}
          >
            Додати в Кошик
          </Link>
        </section>
      </main>
    );
  };

  return (
    <main className="product-page">
      <h1>Товар не знайдено</h1>
    </main>
  );
};

ProductPage.propTypes = {
  match: PropTypes.object.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      ingredients: PropTypes.array.isRequired,
    })
  ),
  addToBasket: PropTypes.func.isRequired,
};

const mapState = (state) => ({
  items: state.data
});

const mapDispatch = (dispatch) => ({
  addToBasket: (item) => dispatch(addToBasket(item))
});

export default connect(mapState, mapDispatch)(ProductPage);