import { fork } from 'redux-saga/effects'

import feed from './feed.js'
import search from './search.js'

export default function* () {
  yield fork(feed)
  yield fork(search)
}
