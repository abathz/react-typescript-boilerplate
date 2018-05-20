import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import Routes from './routes'
import reducers from './reducers'
import './assets/scss'

const store = createStore(reducers, applyMiddleware(ReduxThunk))

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('main'))

if (process.env.NODE_ENV === 'production') {
  require('offline-plugin/runtime').install()
}
