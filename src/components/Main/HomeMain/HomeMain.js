import React from 'react'
import { connect } from 'react-redux'

import './style.css'
import Item from './Item'

const HomeMain = ({ feedImages }) => {
  const Items = () => {
    return feedImages && feedImages.map(img => {
      const { image } = img
      return (
        <Item
          key={image}
          imageUrl={image}
        />
      )
    })
  }

  return <div className="home-main">{Items()}</div>
}

const mapStateToProps = ({ feedImages }) => ({
  feedImages
})

export default connect(mapStateToProps)(HomeMain)
