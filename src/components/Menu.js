import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { loadDB } from '../redux-store/store';
import '../styles/Menu.css';
import MenuItem from './MenuItem';
import Header from './Header';
import Footer from './Footer';

const Menu = (props) => {
  const [loaded, setLoadStatus] = useState(false);
  let menuItems = null;
  console.log(props.getState());

  return (
    menuItems ?

    <div>
      <Header />
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
            menuItems.map(item => <MenuItem item={item} key={item.id} />)
          }
        </div>
      </main>
      <Footer />
    </div>

    :

    <h1>Loading</h1>
  );
};

export default connect(null, null)(Menu);