import React from 'react'

import './style.css'
import SearchIcon from './search'
import Logo from '../../../assets/logo/flickr.png'

const HomeHeader = () => {
  return (
    <div className="home-header">
      <img src={Logo} alt="flickr" />
      <SearchIcon />
    </div>
  )
}

export default HomeHeader
