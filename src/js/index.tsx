import 'core-js/es6'
import 'core-js/es7'
import * as React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'
import App from './components/App'
import store, { history } from './store/configureStore'
import rootSaga from './sagas'

store.runSaga(rootSaga)

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app'),
)
