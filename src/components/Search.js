import React, { useState, useRef, useEffect } from 'react';
import '../styles/Search.css';

const Search = () => {
  const [isActive, activity] = useState(false);


  const activate = () => {
    activity(true);
  };

  const deactivate = () => {
    activity(false);
  };

  // to deactivate in case of loss of focus
  const wrapperRef = useRef(null);
  useOutsideAlterter(wrapperRef);

  function useOutsideAlterter(ref) {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        deactivate();
      };
    };

    useEffect(() => {
      document.addEventListener('mousedown', handleClickOutside);
      return() => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    });
  };

  return (
    isActive ?
      <div className="search--active" ref={wrapperRef}>
        <div
          className="search--active__deactivate-button"
          onClick={deactivate}
        />
        <input
          className="search--active__input"
          type="text"
          placeholder="Search"
          maxLength="15"
          autoFocus={true}
        />
        <div className="search--active__search-icon" />
      </div>
      :
      <div className="search" onClick={activate}></div>      
  );
};

export default Search;