import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { routerMiddleware } from 'react-router-redux'
import { createBrowserHistory } from 'history'
import rootReducer from '../reducers'

export const history = createBrowserHistory()

function configureStore() {
  const sagaMiddleware = createSagaMiddleware()
  const globals: any = window
  const composeEnhancers =
    globals.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  return {
    ...createStore(
      rootReducer,
      composeEnhancers(
        applyMiddleware(sagaMiddleware, routerMiddleware(history)),
      ),
    ),
    runSaga: sagaMiddleware.run,
  }
}

const store = configureStore()
export default store
