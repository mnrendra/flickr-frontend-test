import * as types from './types'

export const getFeed = () => ({
  type: types.FEED.GET
})

export const setFeed = images => ({
  type: types.FEED.SET,
  images
})
