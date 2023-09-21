import React from 'react'
import { useState } from 'react'

const Search = () => {

    const [searchTerm, setSearchTerm] = useState('')

    
  return (
      <div id='searchbar'>
          <input type="search" name="searchbar" id="search" placeholder='Search images...' onChange={(e)=>{setSearchTerm(e.target.value)}}/>
    </div>
  )
}

export default Search