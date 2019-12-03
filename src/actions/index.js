import * as types from './types'

export const getFeed = () => ({
  type: types.FEED.GET
})

export const setFeed = feedImages => ({
  type: types.FEED.SET,
  feedImages
})
