import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import Search from './Search';

const Header = () => {
  return (
    <header>
      <a href="https://www.mcdonalds.ua" title="McDonalds">
        <img
          className="header__logo"
          src="https://www.mcdonalds.ua/content/ua/_jcr_content/logo/logo.img.png/1478708656902.png"
          alt="Mc Donalds logo"
        />
      </a>
      <Search />
      <Link className="header__link-to-basket" to="/basket" />
    </header>
  );
};

export default Header;