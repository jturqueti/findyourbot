import React from 'react';

const SearchBar = (props) => {
  return (
    <input
      type="text"
      className="search-bar-input"
      name="search"
      placeholder="Rechercher..."
      value={props.value}
      onChange={(event) => props.handleChange(event.target.value)}
    />
  );
};

export default SearchBar;
