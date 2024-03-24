import React from 'react';

const Search = ({ searchfield, searchChange}) => {
  return (
    <div>
      <input 
        type='search' 
        placeholder='search robots' 
        onChange={searchChange}
      />
    </div>
  )
}

export default Search;