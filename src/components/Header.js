import React from 'react';
import '../styles/Header.css';
import Search from './Search';

const Header = () => {
  return (
    <header>
      <img
        className="header__logo"
        src="https://www.mcdonalds.ua/content/ua/_jcr_content/logo/logo.img.png/1478708656902.png"
      />
      <Search />
    </header>
  );
};

export default Header;