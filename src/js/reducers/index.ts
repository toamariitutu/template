import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import app from './app'

const rootReducer = combineReducers({
  app,
  router: routerReducer,
})

export interface ReduxState {
  app: ReturnType<typeof app>
}

export default rootReducer
