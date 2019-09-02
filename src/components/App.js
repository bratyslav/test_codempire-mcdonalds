import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import '../styles/App.css';
import Menu from './Menu';
import ProductPage from './ProductPage';
import Basket from './Basket';

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={Menu} />
      <Route path="/product/:productName" exact component={ProductPage} />
      <Route path="/basket" exact component={Basket} />
    </Router>
  );
};

export default App;
