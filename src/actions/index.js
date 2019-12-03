import { SECTION, FEED, QUERY } from './types'

export const changeSection = section => ({
  type: SECTION.CHANGE,
  section
})

export const backSection = () => ({
  type: SECTION.BACK
})

export const getFeed = () => ({
  type: FEED.GET
})

export const setFeed = feedImages => ({
  type: FEED.SET,
  feedImages
})

export const setQuery = query => ({
  type: QUERY.SET,
  query
})
