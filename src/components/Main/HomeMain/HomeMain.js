import React from 'react'

import './style.css'
import Item from './Item'

const HomeMain = () => {
  const dummy = [
    { id: 1, imageUrl: 'https://live.staticflickr.com/7900/40351782223_ee7f950647_m.jpg' },
    { id: 2, imageUrl: 'https://live.staticflickr.com/7900/40351782223_ee7f950647_m.jpg' },
    { id: 3, imageUrl: 'https://live.staticflickr.com/7900/40351782223_ee7f950647_m.jpg' }
  ]

  const Items = () => {
    return dummy.map(dum => {
      return (
        <Item
          key={dum.id}
          imageUrl={dum.imageUrl}
        />
      )
    })
  }

  return <div className="home-main">{Items()}</div>
}

export default HomeMain
