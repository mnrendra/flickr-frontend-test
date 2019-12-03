import { combineReducers } from 'redux'

import section from './section'
import feedImages from './feedImages'
import searchImages from './searchImages'
import query from './query'

export default combineReducers({
  section,
  feedImages,
  searchImages,
  query
})
