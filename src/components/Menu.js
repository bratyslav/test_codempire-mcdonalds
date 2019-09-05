import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { loadData } from '../redux-store/store';
import '../styles/Menu.css';
import MenuItem from './MenuItem';
import PropTypes from 'prop-types';

const Menu = ({ loadData, loaded, items, searchingStr }) => {
  useEffect(() => {
    loadData();
  });

  return (
    loaded ?

    <main className="menu">
      <div className="menu__headline">
        <h1>McDonalds&nbsp;Меню</h1>
        <img
          className="menu__headline-image"
          src="https://www.mcdonalds.ua/content/ua/Eat/menu/fullmenu/_jcr_content/par/category/hero.img.png/1486555760083.png"
          alt="menu foto"
        />
      </div>
      <hr className="menu__headline-underline"/>
      <div className="menu__content">
        {
          items
            .filter(item => item.name.toLowerCase().includes(searchingStr))
            .map(item => <MenuItem item={item} key={item.id} />)
        }
      </div>
    </main>

    :

    <main className="menu">
      <h1>Loading...</h1>
    </main>
  );
};

Menu.propTypes = {
  loadData: PropTypes.func.isRequired,
  loaded: PropTypes.bool.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      ingredients: PropTypes.array.isRequired,
    })
  ),
  searchingStr: PropTypes.string.isRequired,
};

const mapState = (state) => ({
  items: state.data,
  loaded: state.loaded,
  searchingStr: state.searchingStr
});

const mapDispatch = (dispatch) => ({
  loadData: () => dispatch(loadData())
});

export default connect(mapState, mapDispatch)(Menu);