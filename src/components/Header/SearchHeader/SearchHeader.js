import React from 'react'
import { connect } from 'react-redux'

import { backSection, setQuery } from '../../../actions'
import './style.css'
import BackIcon from './back'
import SearchIcon from './search'

const SearchHeader = ({ query, setQuery, backSection }) => {
  const onSearch = (e) => (e.type === 'click' || e.key === 'Enter') && console.log(query)
  const onTyping = e => setQuery(e.target.value)
  return (
    <div className="search-header">
      <BackIcon onClick={backSection} />
      <input
        type="text"
        placeholder="search"
        spellCheck="false"
        onChange={onTyping}
        onKeyDown={onSearch}
        value={query}
      />
      <SearchIcon onClick={onSearch} />
    </div>
  )
}

const mapStateToProps = ({ query }) => ({
  query
})

const mapDispatchToProps = dispatch => ({
  backSection: () => dispatch(backSection()),
  setQuery: value => dispatch(setQuery(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchHeader)
