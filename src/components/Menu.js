import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { loadData } from '../redux-store/store';
import '../styles/Menu.css';
import MenuItem from './MenuItem';

const Menu = ({ loadData, loaded, items }) => {
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
          items.map(item => <MenuItem item={item} key={item.id} />)
        }
      </div>
    </main>

    :

    <h1>Loading</h1>
  );
};

const mapState = (state) => ({
  items: state.data,
  loaded: state.loaded
});

const mapDispatch = (dispatch) => ({
  loadData: () => dispatch(loadData())
});

export default connect(mapState, mapDispatch)(Menu);