import React from 'react';
import { testAction } from '../redux-store/store';
import { connect } from 'react-redux';

const Menu = ({ dispatch }) => {
  return (
    <div>
      <h1>Menu</h1>
      <button onClick={() => {dispatch(testAction())}}>
        Test for Redux
      </button>
    </div>
  );
};

export default connect(null, null)(Menu);