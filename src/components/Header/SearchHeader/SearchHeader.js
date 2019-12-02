import React from 'react'

import './style.css'
import BackIcon from './back'
import SearchIcon from './search'

const SearchHeader = () => {
  return (
    <div className="search-header">
      <BackIcon />
      <input type="text" placeholder="search" spellCheck="false" />
      <SearchIcon />
    </div>
  )
}

export default SearchHeader
