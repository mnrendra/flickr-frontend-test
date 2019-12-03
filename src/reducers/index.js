import { combineReducers } from 'redux'

import section from './section'
import feedImages from './feedImages'
import query from './query'

export default combineReducers({
  section,
  feedImages,
  query
})
