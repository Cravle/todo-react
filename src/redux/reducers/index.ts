import { combineReducers } from 'redux'

import tasksReducer from './tasksReducer'
import { userReducer } from './userReducer'

export const rootReducer = combineReducers({
  tasks: tasksReducer,
  user: userReducer,
})

export type RootState = ReturnType<typeof rootReducer>
