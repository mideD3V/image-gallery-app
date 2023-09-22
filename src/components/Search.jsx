import React from 'react'
import { useState } from 'react'

import { FiSearch } from "react-icons/fi";

const Search = () => {

  return (
    <div id="searchbar">
      <input
        type="search"
        name="searchbar"
        id="search"
        placeholder="Search images..."
        onChange={(e) => {
        }}
      />{" "}
      <FiSearch className="icon" />
    </div>
  );
}

export default Search