import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import Search from './Search';

const Header = () => {
  return (
    <header>
      <div className="header">
        <Search />
        <Link className="header__link-to-basket" to="/basket" />
      </div>
      <a href="https://www.mcdonalds.ua" title="www.mcdonalds.ua">
        <img
          className="header__logo"
          src="https://www.mcdonalds.ua/content/ua/_jcr_content/logo/logo.img.png/1478708656902.png"
          alt="Mc Donalds logo"
        />
      </a>
    </header>
  );
};

export default Header;