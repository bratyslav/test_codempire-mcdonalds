import React from 'react';
import '../styles/Menu.css';
import { items } from '../API/menu-items';
import MenuItem from './MenuItem';
import Header from './Header';
import Footer from './Footer';

const Menu = () => {
  return (
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
            items.map(item => <MenuItem item={item} key={item.id} />)
          }
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Menu;