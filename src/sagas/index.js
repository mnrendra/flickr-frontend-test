import { fork } from 'redux-saga/effects'

import feed from './feed.js'

export default function* () {
  yield fork(feed)
}
