import { FEED } from '../actions/types'

export default (state = [], { type, images }) => {
  switch (type) {
    case FEED.SET:
      return images.images
    default:
      return state
  }
}
