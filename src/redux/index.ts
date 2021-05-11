import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'

import { rootReducer } from './reducers'
import rootWatcher from './saga'

const sagaMiddleWare = createSagaMiddleware()

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleWare))
)

sagaMiddleWare.run(rootWatcher)
