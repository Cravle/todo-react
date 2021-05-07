import { FC } from 'react'
import { Redirect, Route, Switch } from 'react-router'

import { AuthPage, Todo } from './pages'
import { isLogin } from './utils'

const PrivateRoute: React.FC<{
  component: React.FC
  path: string
  exact: boolean
}> = (props) => {
  return isLogin() ? (
    <Route path={props.path} exact={props.exact} component={props.component} />
  ) : (
    <Redirect to="/login" />
  )
}

const Routes: FC = () => {
  return (
    <Switch>
      <PrivateRoute path="/tasks" component={Todo} exact />
      <Route exact path="/login" component={AuthPage} />
      <Redirect to="/tasks" />
    </Switch>
  )
}

export default Routes
