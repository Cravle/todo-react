import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'

import App from './App'
import { store } from './store'

const Root = () => {
	return (
		<Provider store={store}>
			<Router>
				<App />
			</Router>
		</Provider>
	)
}

export default Root
