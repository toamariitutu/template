import * as React from 'react'
import { Route, Switch } from 'react-router-dom'
import Mainframe from '../containers/Mainframe'

const Router = () => {
  return (
    <Switch>
      <Route path="/" component={Mainframe} />
    </Switch>
  )
}

export default Router
