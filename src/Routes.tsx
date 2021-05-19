import { FC } from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route, Switch } from 'react-router'

import { getIsAuth } from '@selectors//user'
import { AuthPage, Todo, SignUp } from './pages'

const PrivateRoute: FC<{
  component: FC
  path: string
  exact: boolean
}> = ({ path, exact, component }) => {
  const isAuth = useSelector(getIsAuth)
  return isAuth ? (
    <Route path={path} exact={exact} component={component} />
  ) : (
    <Redirect to="/login" />
  )
}

const Routes: FC = () => {
  return (
    <Switch>
      <PrivateRoute path="/tasks" component={Todo} exact />
      <Route exact path="/login" component={AuthPage} />
      <Route exact path="/register" component={SignUp} />
      <Redirect to="/tasks" />
    </Switch>
  )
}

export default Routes
