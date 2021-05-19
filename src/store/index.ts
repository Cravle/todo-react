import { createBrowserHistory } from 'history'
import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import { routerMiddleware } from 'connected-react-router'

import { createRootReducer } from './reducers'
import rootWatcher from './saga'

export const history = createBrowserHistory()
export const rootReducer = createRootReducer(history)
const sagaMiddleWare = createSagaMiddleware()

export const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(sagaMiddleWare),
    applyMiddleware(routerMiddleware(history))
  )
)

export type RootState = ReturnType<typeof rootReducer>

sagaMiddleWare.run(rootWatcher)
