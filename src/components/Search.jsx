import React from 'react'
import { useState } from 'react'

import { FiSearch } from "react-icons/fi";

const Search = () => {

    const [searchTerm, setSearchTerm] = useState('')

    
  return (
    <div id="searchbar">
      <input
        type="search"
        name="searchbar"
        id="search"
        placeholder="Search images..."
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />{" "}
      <FiSearch className="icon" />
    </div>
  );
}

export default Search