import { all } from 'redux-saga/effects'

import { tasksWatcher } from './tasksSaga'
import { userWatcher } from './userSaga'

function* rootWatcher() {
  yield all([tasksWatcher(), userWatcher()])
}

export default rootWatcher
