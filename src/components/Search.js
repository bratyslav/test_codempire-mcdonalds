import React, { useState, useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import { setSearchingStr } from '../redux-store/store';
import '../styles/Search.css';
const classNames = require('classnames');
import PropTypes from 'prop-types';

const Search = ({ setSearchingStr }) => {
  const [isActive, activity] = useState(false);
  // to animate opening:
  const [openingAnimation, runOpeningAnimation] = useState(false);
  const searchInputClassName = classNames({
    'search--active__input': true,
    'search--active__input-animation': !openingAnimation,
  });

  const activate = () => {
    activity(true);

    setTimeout(() => {
      runOpeningAnimation(true);
    }, 0);
  };

  const deactivate = () => {
    activity(false);
    runOpeningAnimation(false);
  };

  // to deactivate in case of loss of focus:
  const wrapperRef = useRef(null);

  function useOutsideAlterter(ref) {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        deactivate();
      };
    };

    useEffect(() => {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    });
  };

  useOutsideAlterter(wrapperRef);

  if (isActive) {
    return (
      <div className="search--active" ref={wrapperRef}>
        <div
          className="search--active__deactivate-button"
          onClick={deactivate}
        />
        <input
          className={searchInputClassName}
          id="searchInput"
          type="text"
          placeholder="Search"
          maxLength="30"
          autoFocus={true}
          autoComplete="off"
          onChange={() => setSearchingStr(event.target.value)}
        />
        <label htmlFor="searchInput">
          <div className="search--active__search-icon" />
        </label>

      </div>
    );
  };

  return(
    <div className="search" onClick={activate}></div>      
  );
};

Search.propTypes = {
  setSearchingStr: PropTypes.func.isRequired,
};

const mapDispatch = (dispatch) => ({
  setSearchingStr: (str) => dispatch(setSearchingStr(str)),
});

export default connect(null, mapDispatch)(Search);