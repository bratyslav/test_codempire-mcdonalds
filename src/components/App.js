import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import '../styles/App.css';
import Menu from './Menu';
import ProductPage from './ProductPage';
import Basket from './Basket';
import Header from './Header';
import Footer from './Footer';

const App = () => {
  return (
    <Router>
      <Header />

      <Route path="/" exact component={Menu} />
      <Route path="/product/:productName" exact component={ProductPage} />
      <Route path="/basket" exact component={Basket} />
      
      <Footer />
    </Router>
  );
};

export default App;
