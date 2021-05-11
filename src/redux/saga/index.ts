import { all } from 'redux-saga/effects'
import { tasksWatcher } from './tasksSaga'

function* rootWatcher() {
  yield all([tasksWatcher()])
}

export default rootWatcher
