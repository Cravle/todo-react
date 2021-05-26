import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import App from './App'
import { history, store } from './store'

const Root = () => {
  return (
    <Provider store={store}>
      <DndProvider backend={HTML5Backend}>
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
      </DndProvider>
    </Provider>
  )
}

export default Root
