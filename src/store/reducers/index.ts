import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { History } from 'history'

import tasksReducer from './tasks'
import userReducer from './user'

export const createRootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    tasks: tasksReducer,
    user: userReducer,
  })
