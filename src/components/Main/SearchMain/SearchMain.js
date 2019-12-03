import React from 'react'
import { connect } from 'react-redux'

import './style.css'
import Item from './Item'

const SearchMain = ({ searchImages }) => {

  const Items = () => {
    return searchImages && searchImages.map(img => {
      return (
        <Item
          key={img.image}
          imageUrl={img.image}
        />
      )
    })
  }

  return <div className="search-main">{Items()}</div>
}

const mapStateToProps = ({ searchImages }) => ({
  searchImages
})

export default connect(mapStateToProps)(SearchMain)
