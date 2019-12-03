import React from 'react'
import { connect } from 'react-redux'

import { getSearchMore } from '../../../actions'
import './style.css'
import Item from './Item'

const SearchMain = ({ searchImages, getSearchMore }) => {
  const loadMore = () => getSearchMore()

  const Items = () => {
    return searchImages && searchImages.map(news => {
      return (
        <Item
          key={news.image}
          imageUrl={news.image}
        />
      )
    })
  }

  const content = () => {
    return (
      <>
        {Items()}
        <button className="load-more" onClick={loadMore}>
          Load More
        </button>
      </>
    )
  }

  return <div className="search-main">{content()}</div>
}

const mapStateToProps = ({ searchImages }) => ({
  searchImages
})

const mapDispatchToProps = dispatch => ({
  getSearchMore: () => dispatch(getSearchMore())
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchMain)
